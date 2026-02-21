import { motion } from 'framer-motion'

const stack = [
  {
    name: <span className="inline-block w-48 h-8 bg-[var(--ink-secondary)] mb-1"></span>,
    badge: <span className="inline-block w-32 h-4 bg-[var(--ink-secondary)] opacity-80"></span>,
    summary: <div className="space-y-2 w-full"><div className="w-full h-5 bg-[var(--ink-secondary)] opacity-60"></div><div className="w-2/3 h-5 bg-[var(--ink-secondary)] opacity-60"></div></div>,
    desc: <div className="space-y-2 mt-4 w-full"><div className="w-full h-3 bg-[var(--ink-secondary)] opacity-40"></div><div className="w-[90%] h-3 bg-[var(--ink-secondary)] opacity-40"></div><div className="w-[75%] h-3 bg-[var(--ink-secondary)] opacity-40"></div></div>,
  },
  {
    name: <span className="inline-block w-36 h-8 bg-[var(--ink-secondary)] mb-1"></span>,
    badge: <span className="inline-block w-40 h-4 bg-[var(--ink-secondary)] opacity-80"></span>,
    summary: <div className="space-y-2 w-full"><div className="w-[90%] h-5 bg-[var(--ink-secondary)] opacity-60"></div><div className="w-1/2 h-5 bg-[var(--ink-secondary)] opacity-60"></div></div>,
    desc: <div className="space-y-2 mt-4 w-full"><div className="w-[95%] h-3 bg-[var(--ink-secondary)] opacity-40"></div><div className="w-full h-3 bg-[var(--ink-secondary)] opacity-40"></div><div className="w-2/3 h-3 bg-[var(--ink-secondary)] opacity-40"></div></div>,
  },
  {
    name: <span className="inline-block w-40 h-8 bg-[var(--ink-secondary)] mb-1"></span>,
    badge: <span className="inline-block w-36 h-4 bg-[var(--ink-secondary)] opacity-80"></span>,
    summary: <div className="space-y-2 w-full"><div className="w-[85%] h-5 bg-[var(--ink-secondary)] opacity-60"></div><div className="w-3/4 h-5 bg-[var(--ink-secondary)] opacity-60"></div></div>,
    desc: <div className="space-y-2 mt-4 w-full"><div className="w-full h-3 bg-[var(--ink-secondary)] opacity-40"></div><div className="w-[80%] h-3 bg-[var(--ink-secondary)] opacity-40"></div><div className="w-[60%] h-3 bg-[var(--ink-secondary)] opacity-40"></div></div>,
  },
  {
    name: <span className="inline-block w-52 h-8 bg-[var(--ink-secondary)] mb-1"></span>,
    badge: <span className="inline-block w-28 h-4 bg-[var(--ink-secondary)] opacity-80"></span>,
    summary: <div className="space-y-2 w-full"><div className="w-full h-5 bg-[var(--ink-secondary)] opacity-60"></div><div className="w-[80%] h-5 bg-[var(--ink-secondary)] opacity-60"></div></div>,
    desc: <div className="space-y-2 mt-4 w-full"><div className="w-[90%] h-3 bg-[var(--ink-secondary)] opacity-40"></div><div className="w-full h-3 bg-[var(--ink-secondary)] opacity-40"></div><div className="w-1/2 h-3 bg-[var(--ink-secondary)] opacity-40"></div></div>,
  },
]

export default function Stack() {
  return (
    <section id="stack" className="section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label text-[var(--ink-tertiary)] mb-8">Intelligence Stack</p>
          <h2 className="headline-large max-w-4xl">
            Four modules.<br />
            One neural core.
          </h2>
        </motion.div>

        <motion.p
          className="body-text max-w-xl mt-8 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Each product is deployable solo. Together, they operate as an adaptive energy intelligence backbone
          — scaling from aerial capture to edge autonomy.
        </motion.p>

        <div className="divider mt-12" />

        {/* Stack Rows */}
        {stack.map((s, i) => (
          <motion.div
            key={s.name}
            className="grid-row transform-gpu origin-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 10, backgroundColor: 'rgba(0,0,0,0.01)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="text-lg md:text-xl font-bold" style={{ letterSpacing: '-0.02em' }}>{s.name}</p>
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--oail-red)] mt-2">{s.badge}</p>
            </div>
            <p className="summary-text">{s.summary}</p>
            <p className="body-text">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
