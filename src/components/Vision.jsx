import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Autonomy that collaborates',
    description: 'AI copilots that make suggestions, explain rationale, and let crews stay in the loop by design.'
  },
  {
    title: 'Sustainability embedded',
    description: 'Methane detection, ESG tracking, and emission insights woven into every workflow and report.'
  },
  {
    title: 'Resilience at scale',
    description: 'Fault-tolerant systems engineered for remote sites, harsh weather, and low connectivity scenarios.'
  }
]

export default function Vision() {
  return (
    <section id="vision" className="px-6">
      <div className="mx-auto w-[min(92%,1100px)] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 via-black/70 to-black/90">
        <div className="grid gap-10 p-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-xs uppercase tracking-[0.35em] text-oailRed/80"
            >
              Our Vision
            </motion.p>
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true, margin: '-120px' }}
              className="text-3xl font-semibold text-white md:text-4xl"
            >
              “Energy operations become self-optimizing ecosystems—safer, cleaner, and orchestrated by intelligence that
              never sleeps.”
            </motion.blockquote>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              viewport={{ once: true, margin: '-120px' }}
              className="text-sm text-gray-300"
            >
              We partner with innovators and operators ready to operationalize AI as an everyday teammate—from digital
              twin automation to autonomous remediation.
            </motion.p>
          </div>

          <div className="grid gap-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: index * 0.12 }}
                viewport={{ once: true, margin: '-120px' }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">{pillar.title}</p>
                <p className="mt-3 text-sm text-gray-200">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
