import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Stack from './components/Stack'
import Process from './components/Process'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CircuitBackground from './components/CircuitBackground'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-gray-200">
      <CircuitBackground />
      <div className="gradient-spot top-[-20%] left-[10%] h-96 w-96 bg-oailRed/40" />
      <div className="gradient-spot bottom-[-10%] right-[5%] h-[26rem] w-[26rem] bg-sky-500/30" />
      <div className="gradient-spot top-[40%] right-[45%] h-72 w-72 bg-amber-400/30" />

      <div className="relative z-10">
        {loading ? (
          <div className="flex h-screen flex-col items-center justify-center gap-6 text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gray-500">Calibrating Field Intelligence</span>
            <h1 className="text-3xl font-bold text-white md:text-4xl">OAIL.ai Systems Booting…</h1>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-oailRed via-amber-400 to-sky-400" />
            </div>
          </div>
        ) : (
          <div className="bg-grid">
            <Navbar />
            <main className="relative flex flex-col gap-32 pb-24 pt-24">
              <Hero />
              <Highlights />
              <About />
              <Stack />
              <Process />
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
