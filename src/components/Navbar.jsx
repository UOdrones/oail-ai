import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo mark */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-1.5 h-1.5 rounded-full bg-oailRed shadow-[0_0_8px_rgba(204,0,0,0.8)] group-hover:shadow-[0_0_16px_rgba(204,0,0,1)] transition-shadow" />
          <span className="font-orbitron text-xs tracking-[0.3em] text-white/80 group-hover:text-white transition-colors">
            OAIL
          </span>
        </a>

        {/* Nav links — minimal, only essentials */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-medium uppercase tracking-[0.35em] text-gray-600">
          {[
            { label: 'About', href: '#about' },
            { label: 'Team', href: '#team' },
            { label: 'Stack', href: '#stack' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:contact@oail.ai"
          className="text-[10px] font-orbitron tracking-[0.25em] text-gray-500 hover:text-oailRed transition-colors duration-300 uppercase"
        >
          Contact
        </a>
      </div>

      {/* Bottom border — barely there */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.03]" />
    </motion.nav>
  )
}
