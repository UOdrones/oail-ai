import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section id="vision" className="section-padding relative overflow-hidden" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-5xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* Massive editorial quote */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="headline-massive leading-[0.95]">
            We don't follow<br />
            the industry.<br />
            We don't disrupt<br />
            the industry.<br />
            <span style={{ color: 'var(--oail-red)' }}>We drag it<br />forward.</span>
          </h2>
        </motion.div>

        <div className="divider" />

        <motion.p
          className="body-text max-w-lg mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Energy operations become self-optimizing ecosystems - safer, cleaner,
          and orchestrated by intelligence that never sleeps.
        </motion.p>

      </div>
    </section>
  )
}
