export default function Footer() {
  return (
    <footer className="px-6 pb-12">
      <div className="mx-auto flex w-[min(92%,1100px)] flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} OAIL.ai. Energy intelligence, autonomous by default.</p>
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em]">
          <a href="#hero" className="transition hover:text-white">
            Top
          </a>
          <a href="mailto:contact@oail.ai" className="transition hover:text-white">
            Connect
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
