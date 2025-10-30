import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Pumpjack from '../three/Pumpjack'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 55 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color={'#ff0000'} />
        <Stage environment={null}>
          <Pumpjack />
        </Stage>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      <motion.div
        className="absolute flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src="/OAIL3.png"
          alt="OAIL Logo"
          className="w-48 h-auto mb-4 drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]"
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white"
          animate={{ textShadow: '0 0 20px #c00' }}
        >
          AI for Energy
        </motion.h1>
        <p className="mt-2 text-gray-400 text-sm md:text-base">
          Building autonomous intelligence for the oil and gas industry
        </p>
      </motion.div>
    </section>
  )
}
