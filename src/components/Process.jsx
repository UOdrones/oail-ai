import { motion } from 'framer-motion'

const phases = [
  {
    title: '1. Discover',
    description:
      'Rapidly assess assets with existing datasets, drone captures, and operational logs to map automation ROI.',
    details: '2-week sprint with cross-functional OAIL.ai and operator teams.'
  },
  {
    title: '2. Deploy',
    description:
      'Stand up edge inference, configure digital twins, and train domain models tailored to each basin.',
    details: 'Dedicated success engineers deliver go-live, integration, and workforce enablement.'
  },
  {
    title: '3. Autonomize',
    description:
      'Operational copilots orchestrate tasks, route crews, and capture compliance evidence automatically.',
    details: 'Continuous improvement loops ingest outcomes to self-optimise the network.'
  }
]

export default function Process() {
  return (
    <section id="process" className="px-6">
      <div className="mx-auto flex w-[min(92%,1100px)] flex-col gap-10 rounded-3xl border border-white/10 bg-black/40 p-10">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-oailRed/80">Activation Blueprint</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Launch autonomy across the field in 90 days</h2>
          </div>
          <p className="text-sm text-gray-400 md:max-w-md">
            A guided engagement designed to minimize downtime and maximize adoption—backed by measurable KPIs every step of
            the rollout.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.75, delay: index * 0.12 }}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 via-black/30 to-black/70 p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">{phase.title}</p>
              <p className="text-sm text-gray-300">{phase.description}</p>
              <p className="text-xs text-gray-500">{phase.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
