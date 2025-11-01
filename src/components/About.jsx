import { motion } from 'framer-motion'

const capabilities = [
  {
    title: 'Live Digital Field Twin',
    description:
      'Stream aerial and ground-based telemetry into a unified operational picture. Every well, road, and ROW stitched into a living twin.'
  },
  {
    title: 'Autonomous Compliance',
    description:
      'AI agents monitor methane, spill, and emissions thresholds while auto-generating regulatory-ready reports.'
  },
  {
    title: 'Operational Co-pilots',
    description:
      'Guide crews with step-by-step automation, optimized routes, and predictive logistics tuned to each basin.'
  }
]

export default function About() {
  return (
    <section id="about" className="relative px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-[min(92%,1100px)] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto flex w-[min(92%,1100px)] flex-col gap-12 rounded-3xl border border-white/5 bg-white/5 p-10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] backdrop-blur-3xl">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-oailRed/90">About OAIL.ai</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              The intelligence operating system for energy producers
            </h2>
            <p className="text-sm text-gray-300 md:text-base">
              OAIL.ai unifies drone autonomy, edge analytics, and enterprise orchestration. We connect high-frequency
              sensor data with predictive AI to deliver sitewide awareness and autonomous control loops.
            </p>
            <p className="text-sm text-gray-400">
              From high-grading lease operations to reducing methane emissions, our platform keeps your teams ahead of the
              field with actionable guidance, 3D situational awareness, and resilient automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/20 via-black/40 to-black/80 p-8 text-left"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Mission Statement</p>
            <p className="mt-4 text-lg font-medium text-white">
              Redefine how data, automation, and autonomy converge to power low-carbon, high-output energy operations.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="rounded-2xl border border-white/5 bg-black/40 p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">{capability.title}</p>
              <p className="mt-3 text-sm text-gray-300">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
