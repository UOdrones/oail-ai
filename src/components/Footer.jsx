export default function Footer() {
  return (
    <footer className="relative px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="h-px bg-white/[0.04] mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-700 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-oailRed/50" />
            <span className="font-orbitron tracking-[0.2em]">
              © {new Date().getFullYear()} OAIL.AI
            </span>
          </div>

          <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.3em]">
            <a href="#hero" className="hover:text-white transition-colors">Top</a>
            <a href="mailto:contact@oail.ai" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>

        <p className="text-center text-gray-900 text-[9px] tracking-[0.3em] mt-8 font-orbitron uppercase">
          Intelligence · Autonomy · Energy
        </p>
      </div>
    </footer>
  )
}
