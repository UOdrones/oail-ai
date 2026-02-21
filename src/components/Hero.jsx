import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Countdown from './Countdown'
import HeroNodes from './HeroNodes'
import HeroStampsCanvas from './HeroStampsCanvas'
import { isReducedMotion, setupReducedMotionListener } from './nodes/reducedMotion'

export default function Hero() {
  const logoRef = useRef(null)
  const videoRef = useRef(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(isReducedMotion())
    const cleanup = setupReducedMotionListener(setReducedMotion)
    return cleanup
  }, [])

  useEffect(() => {
    // If reduced motion is enabled, we prevent autoplaying the video and show poster
    if (videoRef.current) {
      if (reducedMotion) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(e => console.log('Autoplay prevented:', e))
      }
    }
  }, [reducedMotion])

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background video (w/ fallback poster) */}
      <video
        ref={videoRef}
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        poster="/hero-bg-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/hero-bg.webm" type="video/webm" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay - cream tint for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(10, 10, 10, 0.75)',
          zIndex: 1,
        }}
      />

      {/* Hybrid Node System */}
      <HeroNodes />
      <HeroStampsCanvas logoRef={logoRef} />

      {/* Content - above overlay + mesh */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Oil Drop Logo & Enlarged Tagline */}
        <div className="relative flex flex-col items-center z-10">
          <motion.img
            ref={logoRef}
            src="/OAIL3_nobg.png"
            alt="OAIL Logo Drop"
            className="w-64 md:w-80 lg:w-96 h-auto mb-8 relative z-10"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(229, 57, 53, 0.4)) drop-shadow(0 30px 80px rgba(0,0,0,0.4))',
              cursor: 'crosshair'
            }}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.div
            className="flex flex-col items-center mb-16 text-center z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-lg md:text-2xl lg:text-3xl font-bold tracking-[0.4em] text-[var(--cream)] opacity-90 uppercase leading-relaxed"
              style={{ textShadow: '0 0 20px rgba(229,57,53,0.9), 0 0 40px rgba(229,57,53,0.6)' }}
            >
              Artificial Intelligence<br className="md:hidden" />
              <span className="hidden md:inline"> </span>For Energy
            </p>
          </motion.div>
        </div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Countdown />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[var(--ink-tertiary)] text-xs font-medium tracking-widest uppercase"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
