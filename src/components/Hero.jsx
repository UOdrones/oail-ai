import React from 'react'
import { motion } from 'framer-motion'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden" style={{ background: 'var(--cream)' }}>

      {/* Oil drop — large, centered */}
      <motion.img
        src="/OAIL3.png"
        alt="OAIL"
        className="w-48 md:w-64 lg:w-72 h-auto mb-12"
        style={{
          filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.15))',
          clipPath: 'inset(0 0 30% 0)',
          marginBottom: '20px',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Massive headline */}
      <motion.h1
        className="headline-massive text-center px-6 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        AI FOR<br />
        <span className="text-[var(--oail-red)]">ENERGY</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-[var(--ink-secondary)] text-base md:text-lg max-w-md text-center mb-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        The most advanced AI platform the energy industry has ever seen. And you're early.
      </motion.p>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Countdown />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
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
