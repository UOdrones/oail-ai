import { motion } from 'framer-motion'

const links = [
  { label: 'Platform', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Process', href: '#process' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="pointer-events-auto fixed left-1/2 top-6 z-50 w-[min(92%,1100px)] -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-6 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-8">
        <a href="#hero" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-white">
          <span className="h-2 w-2 rounded-full bg-oailRed shadow-[0_0_12px_rgba(248,113,113,0.9)]" />
          OAIL.ai
        </a>

        <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white hover:underline hover:decoration-oailRed/80 hover:decoration-2"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:contact@oail.ai"
          className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-[0_0_25px_rgba(248,113,113,0.25)] transition hover:border-oailRed/60 hover:bg-oailRed/80 md:block"
        >
          Launch Briefing
        </a>
      </div>
    </motion.nav>
  )
}
