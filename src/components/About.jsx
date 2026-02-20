import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-px bg-oailRed/60" />
          <span className="font-orbitron text-[9px] tracking-[0.5em] text-oailRed uppercase">
            Who We Are
          </span>
        </motion.div>

        {/* The statement */}
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-16 items-start">
          <div>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              We don't consult<br />
              for oil & gas.<br />
              <span className="text-chrome">We <em className="text-oailRed not-italic" style={{ fontFamily: "'Playfair Display', serif" }}>are</em> oil & gas.</span>
            </motion.h2>

            <motion.p
              className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              OAIL.ai was built by operators who've spent decades on location — in frac vans,
              on well pads, managing production, running service companies. We didn't read about
              the problems in this industry. We lived them.
            </motion.p>

            <motion.p
              className="text-gray-400 text-sm leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Then we paired that field knowledge with an engineering team that built enterprise software for
              some of the most demanding organizations on earth. The result is an AI platform that doesn't
              just understand oil & gas — it thinks like an operator.
            </motion.p>
          </div>

          {/* Mission card */}
          <motion.div
            className="glass glass-hover rounded-xl p-8 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="font-orbitron text-[8px] tracking-[0.4em] text-gray-500 uppercase mb-4">
              Our Position
            </p>
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-6">
              "The energy industry's most advanced AI isn't being built in Silicon Valley.
              It's being built in the field."
            </p>
            <div className="h-px bg-white/8 mb-4" />
            <p className="text-gray-500 text-xs">
              OAIL.ai — Williston Basin HQ
            </p>
          </motion.div>
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-3 gap-4 mt-20">
          {[
            { title: 'Digital Field Twin', desc: 'Live operational picture. Every well, road, and ROW stitched into a unified nervous system.' },
            { title: 'Autonomous Compliance', desc: 'AI monitors methane, spills, and emissions. Auto-generates regulatory-ready reports before you ask.' },
            { title: 'Operational Co-Pilots', desc: 'AI that guides crews with predictive logistics, optimized routes, and decisions tuned to each basin.' },
          ].map((cap, i) => (
            <motion.div
              key={cap.title}
              className="glass glass-hover card-glow rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              <p className="font-orbitron text-[9px] tracking-[0.3em] text-oailRed/80 uppercase mb-3">{cap.title}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hr-glow mt-32 mx-auto w-1/2" />
    </section>
  )
}
