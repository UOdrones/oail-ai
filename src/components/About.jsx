import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Opening statement — full width, massive */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label text-[var(--ink-tertiary)] mb-8">Who We Are</p>
          <h2 className="headline-large max-w-4xl">
            We don't consult for oil & gas. We <em style={{ fontStyle: 'italic', color: 'var(--oail-red)' }}>are</em> oil & gas.
          </h2>
        </motion.div>

        <div className="divider" />

        {/* Row 1: Background */}
        <motion.div
          className="grid-row"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Our Background</p>
          <p className="summary-text">
            Built by operators who've spent decades on location.
          </p>
          <p className="body-text">
            In frac vans, on well pads, managing production, running service companies.
            We didn't read about the problems in this industry. We lived them. Then we paired
            that field knowledge with an engineering team that built enterprise software for
            some of the most demanding organizations on earth.
          </p>
        </motion.div>

        {/* Row 2: Position */}
        <motion.div
          className="grid-row"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Our Position</p>
          <p className="summary-text">
            The energy industry's most advanced AI isn't being built in Silicon Valley.
          </p>
          <p className="body-text">
            It's being built in the field. By people who understand the difference between
            a production report and a production facility. OAIL.ai is headquartered in the
            Williston Basin — where the work happens.
          </p>
        </motion.div>

        <div className="divider" />

        {/* Capabilities */}
        <div className="grid md:grid-cols-3 gap-0 mt-0">
          {[
            { title: 'Digital Field Twin', desc: 'Live operational picture. Every well, road, and ROW stitched into a unified nervous system.' },
            { title: 'Autonomous Compliance', desc: 'AI monitors methane, spills, and emissions. Auto-generates regulatory-ready reports before you ask.' },
            { title: 'Operational Co-Pilots', desc: 'AI that guides crews with predictive logistics, optimized routes, and decisions tuned to each basin.' },
          ].map((cap, i) => (
            <motion.div
              key={cap.title}
              className="py-10 pr-10"
              style={{ borderTop: '1px solid var(--divider)' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <p className="section-label mb-4">{cap.title}</p>
              <p className="body-text">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
