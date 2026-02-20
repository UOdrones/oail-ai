import React from 'react'
import { motion } from 'framer-motion'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Absolute black base */}
      <div className="absolute inset-0 bg-black" />

      {/* Subtle radial glow behind drop */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(204,0,0,0.08) 0%, transparent 70%)'
      }} />

      {/* Particle grid */}
      <div className="absolute inset-0 particle-grid opacity-10" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* ═══ THE OIL DROP ═══
             Just the chrome droplet — no text baked in.
             We render all typography as HTML for full control. */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Glow halo behind the drop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(204,0,0,0.15) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* The logo image — cropped to show mainly the oil drop */}
          <motion.img
            src="/OAIL3.png"
            alt="OAIL"
            className="relative z-10 w-52 md:w-72 lg:w-80 h-auto"
            style={{
              maxWidth: '85vw',
              filter: 'drop-shadow(0 0 40px rgba(204,0,0,0.3))',
              /* Clip the bottom text portion of the logo since we render it ourselves */
              clipPath: 'inset(0 0 28% 0)',
              marginBottom: '-8%',
            }}
            animate={{
              filter: [
                'drop-shadow(0 0 30px rgba(204,0,0,0.3))',
                'drop-shadow(0 0 50px rgba(204,0,0,0.6))',
                'drop-shadow(0 0 30px rgba(204,0,0,0.3))',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* ═══ TYPOGRAPHY — rendered as HTML for readability ═══ */}

        {/* Brand name */}
        <motion.h1
          className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.15em] text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            textShadow: '0 0 40px rgba(204,0,0,0.3), 0 0 80px rgba(204,0,0,0.15)',
          }}
        >
          <span className="text-white">O</span>
          <span className="text-oailRed">A</span>
          <span className="text-white">I</span>
          <span className="text-white">L</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="font-orbitron text-[10px] md:text-xs tracking-[0.5em] text-gray-400 uppercase mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Artificial Intelligence for Energy
        </motion.p>

        {/* Divider line */}
        <motion.div
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-oailRed to-transparent mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        />

        {/* Bold statement */}
        <motion.p
          className="text-gray-500 text-sm md:text-base max-w-lg mb-14 font-inter tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          The future of energy runs on intelligence.
          <span className="text-white font-medium"> We're building it.</span>
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Countdown />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-oailRed/60 to-transparent" />
          <span className="font-orbitron text-[7px] tracking-[0.4em] text-gray-700 mt-2 block">SCROLL</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
