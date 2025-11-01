import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Pumpjack from '../three/Pumpjack'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[640px] w-full items-center justify-center overflow-hidden px-6 pt-24 text-center"
    >
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 1.6, 5], fov: 55 }}>
          <ambientLight intensity={0.35} />
          <directionalLight position={[5, 5, 5]} intensity={1.3} color={'#ff4d4d'} />
          <Stage environment={null} intensity={0.4}>
            <Pumpjack />
          </Stage>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/95" />
      <div className="absolute left-1/2 top-16 h-48 w-[480px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90"
        >
          Field Autonomy · AI-driven Energy
        </motion.span>

        <div className="space-y-6">
          <motion.h1
            className="text-4xl font-bold text-white md:text-6xl"
            animate={{ textShadow: '0 0 32px rgba(248,113,113,0.6)' }}
          >
            Deploy autonomous intelligence across every energy asset
          </motion.h1>
          <p className="mx-auto max-w-2xl text-base text-gray-300 md:text-lg">
            OAIL.ai fuses aerial, edge, and operational data to deliver a living digital twin of the field. Predictive
            models, autonomous agents, and safety systems that evolve with every barrel produced.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <a
            href="mailto:contact@oail.ai"
            className="inline-flex items-center justify-center rounded-full bg-oailRed px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:scale-105 hover:bg-oailRed/90"
          >
            Schedule a Demo
          </a>
          <a
            href="#stack"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white/60 hover:bg-white/10"
          >
            Explore the Stack
          </a>
        </div>

        <div className="grid w-full gap-4 border-t border-white/10 pt-6 text-left md:grid-cols-3">
          {[
            {
              title: 'Edge Autonomy',
              description: 'Deploy on-rig decision systems with offline resilience and continuous learning loops.'
            },
            {
              title: 'Operational Clarity',
              description: 'Unified view of wells, routes, and compliance with predictive alerts hours before impact.'
            },
            {
              title: 'Net-Carbon Intelligence',
              description: 'Automated leak detection, methane mitigation, and sustainability reporting baked in.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-black/60 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-oailRed/80">{item.title}</p>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
