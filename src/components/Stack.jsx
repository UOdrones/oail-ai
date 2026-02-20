import { motion } from 'framer-motion'

const stack = [
  {
    name: 'Unmanned Operator',
    badge: 'Aerial Intelligence',
    summary: 'Autonomous drone fleets with AI-guided flight paths.',
    desc: 'HD inspection data captured, processed, and actioned — without a pilot. Every well, pipeline, and facility monitored from above at a fraction of traditional cost.',
  },
  {
    name: 'Operra.ai',
    badge: 'Operations Engine',
    summary: 'Predictive logistics and resource orchestration.',
    desc: 'Pad scheduling, crew routing, and equipment allocation tuned to each basin. Gets smarter every cycle. Replaces spreadsheets and gut decisions with real-time intelligence.',
  },
  {
    name: 'ROWi.ai',
    badge: 'ROW Intelligence',
    summary: 'Automated right-of-way compliance.',
    desc: 'Change detection. Vegetation tracking. Encroachment alerting before violations happen. Automated reporting that stays ahead of regulators.',
  },
  {
    name: 'Edge Operator',
    badge: 'Edge Autonomy',
    summary: 'Offline-resilient inference at the wellsite.',
    desc: 'Real-time anomaly detection even when connectivity is zero. AI that works where your cell phone doesn\'t. Purpose-built for the most remote operations on earth.',
  },
]

export default function Stack() {
  return (
    <section id="stack" className="section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label text-[var(--ink-tertiary)] mb-8">Intelligence Stack</p>
          <h2 className="headline-large max-w-4xl">
            Four modules.<br />
            One neural core.
          </h2>
        </motion.div>

        <motion.p
          className="body-text max-w-xl mt-8 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Each product is deployable solo. Together, they operate as an adaptive energy intelligence backbone
          — scaling from aerial capture to edge autonomy.
        </motion.p>

        <div className="divider mt-12" />

        {/* Stack Rows */}
        {stack.map((s, i) => (
          <motion.div
            key={s.name}
            className="grid-row"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <div>
              <p className="text-lg md:text-xl font-bold" style={{ letterSpacing: '-0.02em' }}>{s.name}</p>
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--oail-red)] mt-2">{s.badge}</p>
            </div>
            <p className="summary-text">{s.summary}</p>
            <p className="body-text">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
