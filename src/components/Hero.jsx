import React from 'react'
import { motion } from 'framer-motion'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Deep dark background with radial red bleed */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-radial from-oailRed/8 via-transparent to-transparent" />

      {/* Scan overlay */}
      <div className="absolute inset-0 scan-overlay opacity-30" />

      {/* Particle Grid Overlay */}
      <div className="absolute inset-0 particle-grid opacity-15" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        {/* 
          Logo — THE centerpiece. No competing text. 
          The logo already says "OAIL" and "ARTIFICIAL INTELLIGENCE FOR ENERGY".
          Let it breathe.
        */}
        <motion.img
          src="/OAIL3.png"
          alt="OAIL — Artificial Intelligence for Energy"
          className="w-72 md:w-[420px] lg:w-[500px] h-auto mb-10"
          style={{ maxWidth: '90vw' }}
          animate={{
            filter: [
              'drop-shadow(0 0 30px rgba(204,0,0,0.4)) drop-shadow(0 0 80px rgba(204,0,0,0.15))',
              'drop-shadow(0 0 50px rgba(204,0,0,0.7)) drop-shadow(0 0 120px rgba(204,0,0,0.3))',
              'drop-shadow(0 0 30px rgba(204,0,0,0.4)) drop-shadow(0 0 80px rgba(204,0,0,0.15))',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* One punchy subtext line */}
        <motion.p
          className="text-gray-400 text-sm md:text-base max-w-xl mb-12 font-inter tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          The future of energy runs on intelligence.
          <span className="text-oailRed font-semibold"> We're building it.</span>
        </motion.p>

        {/* Countdown */}
        <Countdown />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-oailRed to-transparent" />
        <span className="font-orbitron text-[8px] tracking-[0.3em] text-gray-600 mt-2">SCROLL</span>
      </motion.div>
    </section>
  )
}
