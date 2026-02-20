import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section id="vision" className="relative py-32 md:py-40 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Quote mark */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-6xl md:text-8xl text-oailRed/30 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
            "
          </span>
        </motion.div>

        {/* The manifesto */}
        <motion.blockquote
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We don't follow the industry.<br />
          We don't disrupt the industry.<br />
          <span className="text-oailRed">We drag it forward.</span>
        </motion.blockquote>

        <motion.div
          className="hr-glow w-12 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        <motion.p
          className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Energy operations become self-optimizing ecosystems — safer, cleaner,
          and orchestrated by intelligence that never sleeps.
        </motion.p>
      </div>

      <div className="hr-glow mt-32 mx-auto w-1/2" />
    </section>
  )
}
