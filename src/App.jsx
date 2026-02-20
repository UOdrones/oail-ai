import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Teaser from './components/Teaser'
import About from './components/About'
import TeamCred from './components/TeamCred'
import BakkenAI from './components/BakkenAI'
import Stack from './components/Stack'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-black text-gray-400 grain">
      <AnimatePresence mode="wait">
        {loading ? (
          /* ── Cinematic Boot ─────────────────────────── */
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Oil drop — small, pulsing */}
            <motion.img
              src="/OAIL3.png"
              alt="OAIL"
              className="w-16 h-auto mb-6"
              style={{
                clipPath: 'inset(0 0 30% 0)',
                filter: 'drop-shadow(0 0 20px rgba(204,0,0,0.3))',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 0.6, 1], scale: 1 }}
              transition={{ duration: 1.5 }}
            />

            {/* Loading bar */}
            <div className="w-32 h-px bg-white/5 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-oailRed/40 via-oailRed to-oailRed/40"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </div>

            <p className="mt-4 font-orbitron text-[8px] tracking-[0.5em] text-gray-800 uppercase">
              Initializing
            </p>
          </motion.div>
        ) : (
          /* ── Main Site ──────────────────────────────── */
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <main>
              <Hero />
              <Teaser />
              <About />
              <TeamCred />
              <BakkenAI />
              <Stack />
              <Vision />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
