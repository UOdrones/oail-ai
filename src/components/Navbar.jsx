import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(241, 240, 234, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--divider)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-3 group">
        <img
          src="/OAIL3.png"
          alt="OAIL"
          className="w-8 h-8 object-contain"
        />
        <span className="text-sm font-bold tracking-[0.15em] text-[var(--ink)]" style={{ fontFamily: 'Inter' }}>
          OAIL
        </span>
      </a>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-10">
        {['About', 'Team', 'Stack', 'Coverage'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[13px] font-medium text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="text-[13px] font-semibold text-[var(--ink)] hover:text-[var(--oail-red)] transition-colors duration-200 flex items-center gap-2"
      >
        Contact <span className="text-base">↗</span>
      </a>
    </nav>
  )
}
