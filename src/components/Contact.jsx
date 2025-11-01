import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="px-6">
      <div className="mx-auto w-[min(92%,1100px)] overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-xs uppercase tracking-[0.35em] text-oailRed/80"
        >
          Collaborate with us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          viewport={{ once: true, margin: '-110px' }}
          className="mt-4 text-3xl font-semibold text-white md:text-4xl"
        >
          Ready to activate autonomous energy intelligence?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          viewport={{ once: true, margin: '-120px' }}
          className="mx-auto mt-6 max-w-2xl text-sm text-gray-400"
        >
          Let’s co-design your roadmap. From pilot to full-field deployment, the OAIL.ai team partners with you to
          deliver measurable efficiency, safety, and sustainability gains.
        </motion.p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            href="mailto:contact@oail.ai"
            className="inline-flex items-center justify-center rounded-full bg-oailRed px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:scale-105 hover:bg-oailRed/90"
          >
            contact@oail.ai
          </a>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white/60 hover:bg-white/10"
          >
            Book Strategy Call
          </a>
        </div>

        <p className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} OAIL.ai — All rights reserved.</p>
      </div>
    </section>
  )
}
