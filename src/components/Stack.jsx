import { motion } from 'framer-motion'

const stack = [
  {
    name: 'Unmanned Operator',
    desc: 'Autonomous drone fleets with AI-guided flight paths. HD inspection data captured, processed, and actioned — without a pilot.',
    badge: 'Aerial Intelligence',
  },
  {
    name: 'Operra.ai',
    desc: 'Predictive logistics, pad scheduling, and resource orchestration. Tuned to each basin. Smarter every cycle.',
    badge: 'Operations Engine',
  },
  {
    name: 'ROWi.ai',
    desc: 'Automated right-of-way compliance. Change detection. Vegetation tracking. Alerting before violations happen.',
    badge: 'ROW Intelligence',
  },
  {
    name: 'Edge Operator',
    desc: 'Offline-resilient inference at the wellsite. Real-time anomaly detection even when connectivity is zero.',
    badge: 'Edge Autonomy',
  },
]

export default function Stack() {
  return (
    <section id="stack" className="relative py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-px bg-oailRed/60" />
          <span className="font-orbitron text-[9px] tracking-[0.5em] text-oailRed/70 uppercase">
            Intelligence Stack
          </span>
        </motion.div>

        {/* Header */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Four modules.<br />
          <span className="text-chrome">One neural core.</span>
        </motion.h2>

        <motion.p
          className="text-gray-500 text-sm md:text-base max-w-lg mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Each product is deployable solo. Together, they operate as an adaptive energy intelligence backbone
          — scaling from aerial capture to edge autonomy.
        </motion.p>

        {/* Stack grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              className="glass glass-hover card-glow rounded-xl p-8 relative"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <span className="font-orbitron text-[7px] tracking-[0.3em] text-oailRed/50 uppercase px-3 py-1 rounded-full border border-oailRed/15 mb-6 inline-block">
                {s.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{s.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <p className="font-orbitron text-[7px] tracking-[0.2em] text-gray-700 uppercase">
                Integrated with OAIL Neural Core
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0">
                <div className="w-px h-6 bg-gradient-to-b from-oailRed/20 to-transparent absolute top-0 right-4" />
                <div className="h-px w-6 bg-gradient-to-l from-oailRed/20 to-transparent absolute top-4 right-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hr-glow mt-32 mx-auto w-1/2" />
    </section>
  )
}
