import { motion } from 'framer-motion'
import logo from '../three/OAIL3.png'

const PumpjackFront = ({ className = '' }) => {
  const beamTransition = { duration: 3.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }

  return (
    <motion.svg viewBox="0 0 400 300" className={`w-full ${className}`} fill="currentColor" aria-hidden="true">
      <defs>
        <linearGradient id="pumpGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(248,113,113,0.6)" />
          <stop offset="100%" stopColor="rgba(127,29,29,0.2)" />
        </linearGradient>
      </defs>
      <rect x="60" y="220" width="280" height="26" rx="6" opacity="0.85" />
      <polygon points="120,220 170,120 206,120 156,220" opacity="0.9" />
      <polygon points="220,220 260,132 292,132 252,220" opacity="0.9" />
      <rect x="140" y="206" width="40" height="28" opacity="0.9" />
      <rect x="272" y="190" width="34" height="44" opacity="0.85" />

      <motion.g
        initial={{ rotate: -10 }}
        animate={{ rotate: 10 }}
        transition={beamTransition}
        style={{ transformOrigin: '206px 140px' }}
      >
        <rect x="134" y="132" width="200" height="18" rx="4" fill="url(#pumpGlow)" opacity="0.95" />
        <polygon points="310,134 360,98 368,106 320,142" opacity="0.85" />
        <polygon points="132,150 190,112 228,112 166,150" opacity="0.85" />

        <motion.g
          initial={{ rotate: -4 }}
          animate={{ rotate: 6 }}
          transition={beamTransition}
          style={{ transformOrigin: '310px 142px' }}
        >
          <rect x="300" y="138" width="24" height="58" rx="4" opacity="0.85" />
        </motion.g>
      </motion.g>

      <motion.g
        initial={{ y: 0 }}
        animate={{ y: -26 }}
        transition={beamTransition}
        style={{ transformOrigin: '330px 210px' }}
      >
        <rect x="318" y="168" width="36" height="48" rx="18" opacity="0.9" />
        <circle cx="336" cy="188" r="12" fill="rgba(248,113,113,0.55)" />
      </motion.g>

      <motion.rect
        x="310"
        y="186"
        width="10"
        height="60"
        rx="4"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={beamTransition}
        opacity="0.8"
      />
    </motion.svg>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[640px] w-full items-center justify-center overflow-hidden px-6 pt-24 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="absolute left-1/2 top-0 h-[1480px] w-[1480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-oailRed/45 via-oailRed/20 to-transparent blur-[220px]" />
      <div className="absolute left-1/2 top-16 h-48 w-[480px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <motion.div
        className="absolute left-1/2 top-40 w-[620px] -translate-x-1/2 text-oailRed/70"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.75, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
      >
        <PumpjackFront />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10"
      >
        <div className="relative">
          <motion.span
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-oailRed/40 via-transparent to-transparent blur-3xl"
            animate={{ opacity: [0.55, 0.2, 0.55], scale: [1, 1.1, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={logo}
            alt="OAIL.ai logo"
            className="w-full max-w-[420px] drop-shadow-[0_0_50px_rgba(248,113,113,0.55)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: [1, 1.02, 0.99, 1],
              filter: [
                'drop-shadow(0 0 55px rgba(248,113,113,0.75))',
                'drop-shadow(0 0 105px rgba(239,68,68,0.85))',
                'drop-shadow(0 0 65px rgba(248,113,113,0.55))'
              ]
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.25
            }}
          />
        </div>

        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90"
        >
          Field Autonomy · AI-driven Energy
        </motion.span>

        <div className="space-y-6">
          <motion.h1
            className="text-4xl font-bold text-white md:text-6xl"
            animate={{ textShadow: '0 0 32px rgba(248,113,113,0.6)' }}
          >
            Deploy autonomous intelligence across every energy asset
          </motion.h1>
          <p className="mx-auto max-w-2xl text-base text-gray-300 md:text-lg">
            OAIL.ai fuses aerial, edge, and operational data to deliver a living digital twin of the field. Predictive
            models, autonomous agents, and safety systems that evolve with every barrel produced.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <a
            href="mailto:contact@oail.ai"
            className="inline-flex items-center justify-center rounded-full bg-oailRed px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:scale-105 hover:bg-oailRed/90"
          >
            Schedule a Demo
          </a>
          <a
            href="#stack"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white/60 hover:bg-white/10"
          >
            Explore the Stack
          </a>
        </div>

        <div className="grid w-full gap-4 border-t border-white/10 pt-6 text-left md:grid-cols-3">
          {[
            {
              title: 'Edge Autonomy',
              description: 'Deploy on-rig decision systems with offline resilience and continuous learning loops.'
            },
            {
              title: 'Operational Clarity',
              description: 'Unified view of wells, routes, and compliance with predictive alerts hours before impact.'
            },
            {
              title: 'Net-Carbon Intelligence',
              description: 'Automated leak detection, methane mitigation, and sustainability reporting baked in.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-black/60 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-oailRed/80">{item.title}</p>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
