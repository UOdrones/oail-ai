import { motion } from 'framer-motion'

const R = ({ n }) => (
  <span className="bg-[var(--ink)] text-[var(--ink)] select-none leading-none inline-block mx-[2px]">
    {'█'.repeat(n)}
  </span>
)

const stack = [
  {
    name: 'Unmanned Operator',
    badge: 'Aerial Intelligence',
    summary: 'Autonomous drone fleets with AI-guided flight paths.',
    desc: <>HD inspection data <R n={12} /> actioned - without a pilot. Every well, pipeline, and <R n={8} /> from above <R n={14} />.</>,
  },
  {
    name: 'Operra.ai',
    badge: 'Operations Engine',
    summary: 'Predictive logistics and resource orchestration.',
    desc: <>Pad scheduling, crew routing, and <R n={14} /> tuned to each basin. Gets smarter <R n={22} /> Replaces spreadsheets <R n={20} /> real-time intelligence.</>,
  },
  {
    name: 'ROWi.ai',
    badge: 'ROW Intelligence',
    summary: 'Automated right-of-way compliance.',
    desc: <>Change detection. Vegetation tracking. <R n={24} /> before violations happen. Automated reporting <R n={16} /> of regulators.</>,
  },
  {
    name: 'Edge Operator',
    badge: 'Edge Autonomy',
    summary: 'Offline-resilient inference at the wellsite.',
    desc: <>Real-time anomaly detection even <R n={14} /> zero. AI that works where your cell phone doesn't. <R n={26} /> operations on earth.</>,
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
          - scaling from aerial capture to edge autonomy.
        </motion.p>

        <div className="divider mt-12" />

        {/* Stack Rows */}
        {stack.map((s, i) => (
          <motion.div
            key={s.name}
            className="grid-row transform-gpu origin-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 10, backgroundColor: 'rgba(0,0,0,0.01)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
