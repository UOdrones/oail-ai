import { motion } from 'framer-motion'

const stack = [
  {
    name: 'Unmanned Operator',
    desc: 'Autonomous drone fleets capturing HD inspection data with AI-guided flight paths.',
    badge: 'Aerial Intelligence'
  },
  {
    name: 'Operra.ai',
    desc: 'Predictive logistics, pad scheduling, and resource orchestration tuned to each basin.',
    badge: 'Operations Engine'
  },
  {
    name: 'ROWi.ai',
    desc: 'Automated right-of-way compliance with change detection, vegetation tracking, and alerting.',
    badge: 'ROW Intelligence'
  },
  {
    name: 'Edge Operator',
    desc: 'Offline-resilient inference nodes monitoring production sites with real-time anomaly detection.',
    badge: 'Edge Autonomy'
  }
]

export default function Stack() {
  return (
    <section id="stack" className="px-6">
      <div className="mx-auto flex w-[min(92%,1100px)] flex-col gap-10">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-oailRed/80">Our Intelligence Stack</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Coordinated modules designed to work as one</h2>
          <p className="text-sm text-gray-400 md:max-w-2xl">
            Each product is deployable individually, but together they operate as an adaptive energy intelligence
            backbone—scaling from aerial capture to edge automation and enterprise control.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stack.map((s, index) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 via-black/60 to-black/90 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              <div className="relative space-y-4">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gray-300">
                  {s.badge}
                </span>
                <h3 className="text-2xl font-semibold text-white">{s.name}</h3>
                <p className="text-sm text-gray-300">{s.desc}</p>
                <div className="pt-4 text-xs uppercase tracking-[0.35em] text-oailRed/80">Integrated with OAIL Neural Core</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
