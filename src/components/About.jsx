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

        {/* Foundation */}
        <div className="mt-12 pt-10" style={{ borderTop: '1px solid var(--divider)' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-4">The Platform</p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 max-w-3xl text-[var(--ink)]">
              One core intelligence platform designed for 30+ producing basins.
            </h3>
            <p className="body-text max-w-2xl text-[var(--ink-secondary)]">
              While we aren't deployed in every basin yet, our architecture is built to scale across the entire North American footprint. From predictive logistics to autonomous compliance, we are constructing the unified nervous system for industrial energy.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
