import React from 'react'
import { motion } from 'framer-motion'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Deep surface */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Radial red atmosphere */}
      <div className="absolute inset-0 bg-radial-red" />

      {/* Particle field */}
      <div className="absolute inset-0 particles opacity-40" />

      {/* Vertical accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute left-[80%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-900/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto">

        {/* Chrome oil drop */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Pulse ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(204,0,0,0.15) 0%, transparent 70%)',
                animation: 'pulse-ring 3s ease-out infinite',
              }}
            />
          </div>

          <img
            src="/OAIL3.png"
            alt="OAIL"
            className="relative z-10 w-44 md:w-56 lg:w-64 h-auto"
            style={{
              filter: 'drop-shadow(0 0 60px rgba(204,0,0,0.3)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))',
              clipPath: 'inset(0 0 30% 0)',
              marginBottom: '-10%',
            }}
          />
        </motion.div>

        {/* OAIL — Massive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3"
        >
          <h1 className="font-orbitron text-6xl md:text-8xl lg:text-[120px] font-black tracking-[0.08em] leading-none">
            <span className="text-chrome-shine">O</span>
            <span className="text-oailRed" style={{ textShadow: '0 0 60px rgba(204,0,0,0.4)' }}>A</span>
            <span className="text-chrome-shine">I</span>
            <span className="text-chrome-shine">L</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-orbitron text-[9px] md:text-[11px] tracking-[0.6em] text-gray-400 uppercase mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Artificial Intelligence for Energy
        </motion.p>

        {/* Thin red line */}
        <motion.div
          className="hr-glow w-20 mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        />

        {/* The statement */}
        <motion.p
          className="text-sm md:text-base max-w-md mb-4 leading-relaxed tracking-wide text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          The most advanced AI platform the energy industry has ever seen.
        </motion.p>

        <motion.p
          className="text-white text-base md:text-lg font-medium mb-14 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          And you're early.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <Countdown />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 3 }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-px h-10 bg-gradient-to-b from-oailRed/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
