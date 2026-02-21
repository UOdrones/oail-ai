import { useRef, useEffect, useCallback } from 'react'
import * as THREE from 'three'

/*
 * FloatingMesh - Small reactive nodes in wave motion with click physics
 *
 * Props:
 *   variant: 'light' | 'dark'
 *   intensity: 0–1 opacity multiplier
 */
export default function FloatingMesh({ variant = 'light', intensity = 1 }) {
  const canvasRef = useRef(null)
  const frameRef = useRef(null)
  const stateRef = useRef({
    ripples: [],       // click ripple effects
    mouseX: 0,
    mouseY: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // ── Config ──────────────────────────────────────────
    const isMobile = window.innerWidth < 768
    const COLS = isMobile ? 40 : 70
    const ROWS = isMobile ? 25 : 45
    const SPACING = isMobile ? 0.28 : 0.22
    const NODE_SIZE = isMobile ? 1.2 : 0.9     // small dots
    const LINE_OPACITY = variant === 'dark' ? 0.035 : 0.025
    const NODE_OPACITY = variant === 'dark' ? 0.25 : 0.12
    const DPR = Math.min(window.devicePixelRatio, 1.5)

    const nodeColor = variant === 'dark'
      ? new THREE.Color(0.92, 0.91, 0.88)
      : new THREE.Color(0.06, 0.06, 0.06)

    // ── Renderer ────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
    })
    renderer.setPixelRatio(DPR)
    renderer.setClearColor(0x000000, 0)

    // ── Scene & Camera ──────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.set(0, 8, 10)
    camera.lookAt(0, 0, 0)

    // ── Geometry: Dense Grid of Small Nodes ─────────────
    const totalPoints = COLS * ROWS
    const positions = new Float32Array(totalPoints * 3)
    const velocities = new Float32Array(totalPoints)  // Y velocity for physics
    const baseX = new Float32Array(totalPoints)
    const baseZ = new Float32Array(totalPoints)

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const idx = row * COLS + col
        const x = (col - COLS / 2) * SPACING
        const z = (row - ROWS / 2) * SPACING
        positions[idx * 3] = x
        positions[idx * 3 + 1] = 0
        positions[idx * 3 + 2] = z
        baseX[idx] = x
        baseZ[idx] = z
        velocities[idx] = 0
      }
    }

    // Point cloud - small nodes
    const pointGeo = new THREE.BufferGeometry()
    pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const pointMat = new THREE.PointsMaterial({
      color: nodeColor,
      size: NODE_SIZE,
      sizeAttenuation: true,
      transparent: true,
      opacity: NODE_OPACITY * intensity,
      depthWrite: false,
    })
    const points = new THREE.Points(pointGeo, pointMat)
    scene.add(points)

    // Wireframe - only connect nearby nodes (skip every other for lighter look)
    const lineIndices = []
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const i = row * COLS + col
        if (col < COLS - 1 && (row + col) % 2 === 0) {
          lineIndices.push(i, i + 1)
        }
        if (row < ROWS - 1 && (row + col) % 2 === 0) {
          lineIndices.push(i, i + COLS)
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    lineGeo.setIndex(lineIndices)

    const lineMat = new THREE.LineBasicMaterial({
      color: nodeColor,
      transparent: true,
      opacity: LINE_OPACITY * intensity,
      depthWrite: false,
    })
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // ── Interaction State ───────────────────────────────
    let scrollY = 0
    let targetMouseX = 0
    let targetMouseY = 0
    let smoothMouseX = 0
    let smoothMouseY = 0

    const handleScroll = () => { scrollY = window.scrollY }
    const handleMouse = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    // ── Click Physics: Ripple Effect ────────────────────
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const ndcY = -((e.clientY - rect.top) / rect.height) * 2 + 1

      // Raycaster to find click position in world space
      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera)

      // Intersect with y=0 plane
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
      const hitPoint = new THREE.Vector3()
      raycaster.ray.intersectPlane(plane, hitPoint)

      if (hitPoint) {
        stateRef.current.ripples.push({
          x: hitPoint.x,
          z: hitPoint.z,
          time: 0,
          strength: 1.5,
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouse, { passive: true })
    canvas.style.pointerEvents = 'auto'
    canvas.style.cursor = 'crosshair'
    canvas.addEventListener('click', handleClick)

    // ── Resize ──────────────────────────────────────────
    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const w = parent.clientWidth
      const h = parent.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas.parentElement)

    // ── Animation Loop ──────────────────────────────────
    const clock = new THREE.Clock()

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      const dt = Math.min(clock.getDelta(), 0.05)

      // Smooth mouse
      smoothMouseX += (targetMouseX - smoothMouseX) * 0.04
      smoothMouseY += (targetMouseY - smoothMouseY) * 0.04

      const scrollPhase = scrollY * 0.0015
      const posArray = pointGeo.attributes.position.array

      // Age and clean up ripples
      const ripples = stateRef.current.ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        ripples[r].time += dt
        if (ripples[r].time > 3) ripples.splice(r, 1)
      }

      // Update each node
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const idx = row * COLS + col
          const bx = baseX[idx]
          const bz = baseZ[idx]

          // Gentle organic waves
          const wave1 = Math.sin(bx * 1.2 + t * 0.5 + scrollPhase) * 0.15
          const wave2 = Math.cos(bz * 0.9 + t * 0.35 - scrollPhase * 0.4) * 0.12
          const wave3 = Math.sin((bx + bz) * 0.7 + t * 0.25) * 0.08
          let waveY = wave1 + wave2 + wave3

          // Click ripple physics
          for (let r = 0; r < ripples.length; r++) {
            const rip = ripples[r]
            const dx = bx - rip.x
            const dz = bz - rip.z
            const dist = Math.sqrt(dx * dx + dz * dz)
            const rippleRadius = rip.time * 4  // expanding ring
            const ringDist = Math.abs(dist - rippleRadius)

            if (ringDist < 1.5) {
              const falloff = Math.exp(-rip.time * 1.2) * rip.strength
              const ringShape = Math.cos(ringDist * Math.PI / 1.5)
              const rippleY = ringShape * falloff * 0.6
              velocities[idx] += rippleY * dt * 15
            }
          }

          // Spring physics: velocity decays, pulls back to wave position
          velocities[idx] *= 0.96  // damping
          const currentY = posArray[idx * 3 + 1]
          const targetY = waveY
          velocities[idx] += (targetY - currentY) * dt * 3  // spring force

          posArray[idx * 3 + 1] = currentY + velocities[idx]
        }
      }

      pointGeo.attributes.position.needsUpdate = true
      lineGeo.attributes.position.needsUpdate = true

      // Camera: gentle parallax
      camera.position.x = smoothMouseX * 0.5
      camera.position.y = 8 + smoothMouseY * 0.3
      camera.lookAt(smoothMouseX * 0.15, 0, smoothMouseY * 0.1)

      renderer.render(scene, camera)
    }

    animate()

    // ── Cleanup ─────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouse)
      canvas.removeEventListener('click', handleClick)
      resizeObserver.disconnect()
      renderer.dispose()
      pointGeo.dispose()
      pointMat.dispose()
      lineGeo.dispose()
      lineMat.dispose()
    }
  }, [variant, intensity])

  return (
    <canvas
      ref={canvasRef}
      className="mesh-canvas"
      aria-hidden="true"
    />
  )
}
