import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label text-[var(--ink-tertiary)] mb-8">Get In</p>
            <h2 className="headline-large mb-8">
              The future isn't waiting.
            </h2>
            <p className="body-text max-w-md mb-10">
              We're selectively partnering with operators, investors, and forward-thinkers
              who want to be first - not second.
            </p>

            <motion.a
              href="mailto:contact@oail.ai"
              className="btn-industrial-outline inline-block"
              whileHover={{ scale: 1.05, backgroundColor: 'var(--ink)', color: 'var(--cream)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Request Early Access <span className="text-lg">↗</span>
            </motion.a>

            <p className="body-text mt-6 text-sm">
              or email directly:{' '}
              <a href="mailto:contact@oail.ai" className="text-[var(--ink)] font-medium hover:text-[var(--oail-red)] transition-colors underline">
                contact@oail.ai
              </a>
            </p>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="divider mb-8" />
            <div className="grid gap-8">
              <div>
                <p className="section-label text-[var(--ink-tertiary)] mb-2">Headquarters</p>
                <p className="text-sm text-[var(--ink)]">Williston Basin, North Dakota</p>
              </div>
              <div className="divider" />
              <div>
                <p className="section-label text-[var(--ink-tertiary)] mb-2">Launch</p>
                <p className="text-sm text-[var(--ink)]">May 18, 2026</p>
              </div>
              <div className="divider" />
              <div>
                <p className="section-label text-[var(--ink-tertiary)] mb-2">Contact</p>
                <p className="text-sm text-[var(--ink)]">contact@oail.ai</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
