import { motion } from 'framer-motion'
import logo from '../three/OAIL3.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[640px] w-full items-center justify-center overflow-hidden px-6 pt-24 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/95" />
      <div className="absolute left-1/2 top-0 h-[1480px] w-[1480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-oailRed/28 via-oailRed/14 to-transparent blur-[220px]" />
      <div className="absolute left-1/2 top-16 h-48 w-[480px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10"
      >
        <div className="relative">
          <motion.span
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-oailRed/40 via-transparent to-transparent blur-3xl"
            animate={{ opacity: [0.75, 0.45, 0.75], scale: [1, 1.08, 1] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute inset-0 -z-20 rounded-full bg-[radial-gradient(circle_at_center,_rgba(248,113,113,0.35),_transparent_55%)]"
            animate={{ rotate: [0, 6, -4, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={logo}
            alt="OAIL.ai logo"
            className="w-full max-w-[420px] drop-shadow-[0_0_50px_rgba(248,113,113,0.55)]"
            initial={{ scale: 0.98 }}
            animate={{
              scale: [1, 1.02, 0.99, 1.03, 1],
              rotate: [0, 0.8, -0.8, 0.4, 0],
              y: [0, -4, 0, 3, 0],
              filter: [
                'drop-shadow(0 0 60px rgba(248,113,113,0.75))',
                'drop-shadow(0 0 95px rgba(239,68,68,0.8))',
                'drop-shadow(0 0 70px rgba(248,113,113,0.6))',
                'drop-shadow(0 0 90px rgba(248,113,113,0.7))',
                'drop-shadow(0 0 60px rgba(248,113,113,0.75))'
              ]
            }}
            transition={{
              duration: 5.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.25
            }}
          />
          <motion.span
            className="pointer-events-none absolute -inset-10 -z-30 rounded-full border border-oailRed/20"
            animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.92, 1.08, 0.92] }}
            transition={{ duration: 7.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white"
        >
          Artificial Intelligence for Energy
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
