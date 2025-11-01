import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Pumpjack() {
  const group = useRef()
  const beam = useRef()

  useFrame(({ clock }) => {
    if (!beam.current) return

    const t = clock.getElapsedTime()
    beam.current.rotation.z = Math.sin(t) * 0.2
  })

  return (
    <group ref={group} scale={1.5} position={[0, -1, 0]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1, 0.2]} />
        <meshStandardMaterial color={'#111'} emissive={'#330000'} />
      </mesh>
      <mesh ref={beam} position={[0, 0.6, 0]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial color={'#222'} emissive={'#550000'} />
      </mesh>
    </group>
  )
}
