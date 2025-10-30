import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Vision from './components/Vision'
import Contact from './components/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-2xl tracking-widest text-oailRed mb-2 animate-pulse">
            Initializing Intelligence...
          </h1>
        </div>
      ) : (
        <>
          <Hero />
          <About />
          <Stack />
          <Vision />
          <Contact />
        </>
      )}
    </div>
  )
}
