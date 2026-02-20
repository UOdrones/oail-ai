import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Section label */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-px bg-oailRed/40" />
          <span className="font-orbitron text-[9px] tracking-[0.5em] text-oailRed/70 uppercase">
            Get In
          </span>
          <div className="w-8 h-px bg-oailRed/40" />
        </motion.div>

        {/* CTA */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The future isn't waiting.<br />
          <span className="text-chrome">Neither should you.</span>
        </motion.h2>

        <motion.p
          className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We're selectively partnering with operators, investors, and forward-thinkers
          who want to be first — not second.
        </motion.p>

        {/* Email CTA */}
        <motion.a
          href="mailto:contact@oail.ai"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-oailRed/30 bg-oailRed/5 font-orbitron text-xs md:text-sm tracking-[0.2em] text-white uppercase transition-all duration-500 hover:bg-oailRed hover:border-oailRed hover:shadow-[0_0_60px_rgba(204,0,0,0.4)] hover:scale-105 group"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="w-2 h-2 rounded-full bg-oailRed shadow-[0_0_10px_rgba(204,0,0,0.8)] group-hover:bg-white transition-colors" />
          Request Early Access
        </motion.a>

        {/* Secondary */}
        <motion.p
          className="mt-8 text-gray-700 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          or email directly:{' '}
          <a href="mailto:contact@oail.ai" className="text-gray-500 hover:text-oailRed transition-colors">
            contact@oail.ai
          </a>
        </motion.p>

        {/* FOMO closer */}
        <motion.p
          className="mt-16 font-orbitron text-[8px] tracking-[0.5em] text-gray-800 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          First movers get remembered · Everyone else gets disrupted
        </motion.p>
      </div>
    </section>
  )
}
