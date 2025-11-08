import { motion } from 'framer-motion'

const DataWave = ({ delay = 0, className = '' }) => (
  <motion.svg
    viewBox="0 0 200 160"
    className={`h-36 w-48 text-black/70 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <motion.path
      d="M24 124 C62 46 138 46 176 124"
      strokeOpacity="0.8"
      strokeDasharray="6 12"
      animate={{ strokeDashoffset: [0, -140] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'linear', delay }}
    />
    <motion.path
      d="M24 104 C68 32 132 32 176 104"
      strokeOpacity="0.55"
      strokeDasharray="10 16"
      animate={{ strokeDashoffset: [0, 180] }}
      transition={{ duration: 7.2, repeat: Infinity, ease: 'linear', delay: delay + 0.4 }}
    />
    <motion.circle
      cx="100"
      cy="56"
      r="18"
      strokeOpacity="0.6"
      animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.9, 0.45] }}
      transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.2 }}
    />
    <motion.circle
      cx="100"
      cy="56"
      r="8"
      fill="rgba(248,113,113,0.45)"
      stroke="none"
      animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.3, 0.8] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.6 }}
    />
  </motion.svg>
)

const FlareStack = ({ delay = 0, className = '' }) => (
  <motion.svg
    viewBox="0 0 140 160"
    className={`h-32 w-36 text-black/75 ${className}`}
    fill="currentColor"
    aria-hidden="true"
  >
    <rect x="60" y="60" width="20" height="88" rx="8" opacity="0.85" />
    <rect x="46" y="140" width="48" height="14" rx="6" opacity="0.8" />
    <motion.path
      d="M70 28 C60 40 64 54 70 64 C76 54 80 40 70 28 Z"
      fill="rgba(248,113,113,0.5)"
      animate={{ scale: [1, 1.2, 0.95, 1], rotate: [-4, 4, -2, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay }}
      style={{ transformOrigin: '70px 52px' }}
    />
    <motion.path
      d="M70 18 C56 34 60 48 70 58 C80 48 84 34 70 18 Z"
      fill="rgba(239,68,68,0.65)"
      animate={{ opacity: [0.8, 0.4, 0.8], scale: [1.1, 0.9, 1.1] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.4 }}
      style={{ transformOrigin: '70px 44px' }}
    />
  </motion.svg>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,115,115,0.28),_transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-6 flex w-full items-end justify-center gap-24 opacity-85">
          <DataWave delay={0.2} className="max-w-[260px]" />
          <FlareStack delay={0.9} className="max-w-[200px]" />
        </div>
      </div>
      <div className="relative z-10 mx-auto flex w-[min(92%,1100px)] flex-col gap-10 rounded-3xl border border-white/5 bg-black/30 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
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
              className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/15 via-white/0 to-white/0 p-6 backdrop-blur-sm"
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
