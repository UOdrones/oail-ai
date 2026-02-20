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
        className="w-64 md:w-80 lg:w-96 h-auto mb-16"
        style={{
          filter: 'drop-shadow(0 30px 80px rgba(0,0,0,0.18))',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
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
