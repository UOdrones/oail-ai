export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', color: '#F1F0EA' }}>

      {/* Divider */}
      <div className="h-px w-full" style={{ background: 'rgba(241,240,234,0.08)' }} />

      <div className="max-w-6xl mx-auto px-12 py-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Company */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(241,240,234,0.4)' }}>
              Company
            </p>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(241,240,234,0.7)' }}>About</a>
              <a href="#team" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(241,240,234,0.7)' }}>Team</a>
              <a href="#coverage" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(241,240,234,0.7)' }}>Coverage</a>
            </div>
          </div>

          {/* Technology */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(241,240,234,0.4)' }}>
              Technology
            </p>
            <div className="flex flex-col gap-3">
              <a href="#stack" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(241,240,234,0.7)' }}>Intelligence Stack</a>
              <a href="#teaser" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(241,240,234,0.7)' }}>Projects</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(241,240,234,0.4)' }}>
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:contact@oail.ai" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(241,240,234,0.7)' }}>contact@oail.ai</a>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(241,240,234,0.4)' }}>
              Headquarters
            </p>
            <p className="text-sm" style={{ color: 'rgba(241,240,234,0.7)' }}>
              Williston Basin<br />North Dakota
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px w-full mb-8" style={{ background: 'rgba(241,240,234,0.08)' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.1em]" style={{ color: 'rgba(241,240,234,0.3)' }}>
            © 2024 OAIL.AI — ALL RIGHTS RESERVED
          </p>
          <p className="text-[11px] tracking-[0.1em]" style={{ color: 'rgba(241,240,234,0.3)' }}>
            Intelligence · Autonomy · Energy
          </p>
        </div>
      </div>
    </footer>
  )
}
