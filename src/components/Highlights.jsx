import { motion } from 'framer-motion'

const PumpJack = ({ delay = 0, className = '' }) => {
  const swing = { duration: 3.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay }

  return (
    <motion.svg
      viewBox="0 0 200 140"
      className={`h-32 w-48 text-black/90 ${className}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="18" y="110" width="164" height="20" rx="6" />
      <polygon points="46,110 86,40 114,40 76,110" />
      <polygon points="118,110 150,52 176,52 144,110" />
      <rect x="32" y="94" width="26" height="24" />
      <rect x="150" y="86" width="28" height="36" rx="6" />

      <motion.g initial={{ rotate: -11 }} animate={{ rotate: 11 }} transition={swing} style={{ transformOrigin: '120px 60px' }}>
        <rect x="72" y="54" width="120" height="16" rx="4" />
        <polygon points="176,58 208,34 214,40 184,64" />
        <polygon points="70,72 110,36 140,36 96,72" />

        <motion.rect
          x="174"
          y="64"
          width="14"
          height="52"
          rx="4"
          initial={{ rotate: -6 }}
          animate={{ rotate: 6 }}
          transition={swing}
        />
      </motion.g>

      <motion.g initial={{ y: 0 }} animate={{ y: -26 }} transition={swing}>
        <rect x="184" y="72" width="28" height="46" rx="18" />
        <circle cx="198" cy="92" r="10" fill="rgba(248,113,113,0.35)" />
      </motion.g>
      <motion.rect
        x="178"
        y="90"
        width="10"
        height="58"
        rx="4"
        initial={{ y: -8 }}
        animate={{ y: 12 }}
        transition={swing}
      />
    </motion.svg>
  )
}

const DrillingRig = ({ delay = 0, className = '' }) => (
  <motion.svg
    viewBox="0 0 180 160"
    className={`h-36 w-44 text-black/80 ${className}`}
    fill="currentColor"
    aria-hidden="true"
  >
    <polygon points="88,24 140,152 36,152" opacity="0.9" />
    <rect x="22" y="146" width="140" height="14" rx="4" opacity="0.8" />
    <motion.rect
      x="78"
      y="60"
      width="20"
      height="72"
      rx="6"
      animate={{ y: [54, 44, 54] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay }}
    />
    <motion.rect
      x="70"
      y="126"
      width="36"
      height="14"
      rx="6"
      animate={{ y: [120, 130, 120] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay }}
      opacity="0.85"
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
        <div className="absolute inset-x-0 bottom-6 flex w-full items-end justify-center gap-20 opacity-80">
          <PumpJack delay={0} className="max-w-[220px]" />
          <DrillingRig delay={0.5} className="max-w-[200px]" />
          <FlareStack delay={1} className="max-w-[180px]" />
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
