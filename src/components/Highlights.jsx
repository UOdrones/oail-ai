import { motion } from 'framer-motion'

const metrics = [
  {
    stat: '42%',
    label: 'Reduction in unscheduled field visits',
    detail: 'Autonomous inspections and predictive models redirect techs before downtime hits.'
  },
  {
    stat: '11 min',
    label: 'Average anomaly response time',
    detail: 'Edge agents trigger workflows, dispatch drones, and notify operators instantly.'
  },
  {
    stat: '4M+',
    label: 'Data points synchronized daily',
    detail: 'Across wells, pads, ROWs, and fleets—fused into a single operational intelligence layer.'
  }
]

export default function Highlights() {
  return (
    <section className="px-6" aria-label="Key outcomes">
      <div className="mx-auto flex w-[min(92%,1100px)] flex-col gap-10 rounded-3xl border border-white/10 bg-black/60 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Numbers that reshape field operations</h2>
          <p className="text-sm text-gray-400 md:max-w-md">
            Instrumenting the energy sector with living AI models that drive safety, sustainability, and throughput.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/10 via-transparent to-transparent p-6"
            >
              <p className="text-3xl font-bold text-white md:text-4xl">{metric.stat}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.32em] text-oailRed/80">{metric.label}</p>
              <p className="mt-3 text-sm text-gray-300">{metric.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
