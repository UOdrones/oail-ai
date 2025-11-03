import { motion } from 'framer-motion'

const PumpJack = ({ delay = 0 }) => (
  <svg
    viewBox="0 0 160 100"
    className="h-28 w-40 text-black"
    fill="currentColor"
    role="presentation"
    aria-hidden="true"
  >
    <rect x="10" y="82" width="140" height="8" rx="2" />
    <polygon points="32,82 56,32 72,32 50,82" />
    <polygon points="70,82 92,36 108,36 86,82" />
    <rect x="18" y="68" width="18" height="14" />
    <rect x="120" y="60" width="16" height="22" />
    <motion.g
      initial={{ rotate: -8 }}
      animate={{ rotate: 8 }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2.6, delay }}
      style={{ transformOrigin: '64px 38px' }}
    >
      <rect x="54" y="32" width="70" height="8" rx="2" />
      <polygon points="114,36 144,18 150,22 120,40" />
      <rect x="108" y="38" width="10" height="26" />
      <circle cx="60" cy="36" r="6" />
      <rect x="120" y="40" width="6" height="30" />
    </motion.g>
  </svg>
)

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
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#6b0005] via-[#a50b12] to-[#2d0002] px-6 py-20"
      aria-label="Key outcomes"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,115,115,0.35),_transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-4 flex -translate-x-6 items-end justify-around opacity-70">
          <PumpJack delay={0} />
          <PumpJack delay={0.7} />
          <PumpJack delay={1.4} />
        </div>
      </div>
      <div className="relative z-10 mx-auto flex w-[min(92%,1100px)] flex-col gap-10 rounded-3xl border border-white/10 bg-black/50 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
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
              <p className="text-5xl font-bold text-white leading-none md:text-7xl">{metric.stat}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.42em] text-oailRed/80 md:text-sm">{metric.label}</p>
              <p className="mt-3 text-sm text-gray-300">{metric.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
