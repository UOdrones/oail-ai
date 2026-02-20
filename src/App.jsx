import React from 'react'
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
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <Navbar />
      <Hero />
      <Teaser />
      <About />
      <TeamCred />
      <BakkenAI />
      <Stack />
      <Vision />
      <Contact />
      <Footer />
    </div>
  )
}
