import React, { useState, useEffect } from 'react'
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
import CircuitBackground from './components/CircuitBackground'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-gray-200">
      <CircuitBackground />

      {/* Subtle red gradient spots */}
      <div className="gradient-spot top-[-20%] left-[10%] h-96 w-96 bg-oailRed/30" />
      <div className="gradient-spot bottom-[-10%] right-[5%] h-[26rem] w-[26rem] bg-oailRed/15" />

      <div className="relative z-10">
        {loading ? (
          /* ── Terminal Boot Sequence ─────────────────── */
          <div className="flex h-screen flex-col items-center justify-center gap-6 text-center px-6">
            <span className="font-orbitron text-xs uppercase tracking-[0.4em] text-oailRed/70 animate-pulse">
              [ INITIALIZING FIELD INTELLIGENCE ]
            </span>
            <img
              src="/OAIL3.png"
              alt="OAIL"
              className="w-24 md:w-32 h-auto opacity-60"
              style={{ filter: 'drop-shadow(0 0 20px rgba(204,0,0,0.3))' }}
            />
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-oailRed/60 via-oailRed to-oailRed/60" />
            </div>
            <span className="font-inter text-[10px] tracking-[0.3em] text-gray-700">
              OAIL.AI SYSTEMS v2.0
            </span>
          </div>
        ) : (
          <div className="bg-grid">
            <Navbar />
            <main className="relative flex flex-col pb-24">
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
          </div>
        )}
      </div>
    </div>
  )
}
