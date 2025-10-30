export default function Stack() {
  const stack = [
    { name: 'Unmanned Operator', desc: 'Autonomous drone data for energy infrastructure.' },
    { name: 'Operra.ai', desc: 'AI-driven site planning and frac logistics.' },
    { name: 'ROWi.ai', desc: 'Automated right-of-way and reclamation inspections.' },
    { name: 'Unmanned Operator (Edge)', desc: 'Edge AI for live production-site monitoring.' }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-[#111] text-gray-300 text-center">
      <h2 className="text-3xl text-white font-bold mb-10">Our Intelligence Stack</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {stack.map((s, i) => (
          <div key={i} className="p-6 border border-gray-700 rounded-xl hover:border-oailRed transition">
            <h3 className="text-xl text-white mb-2">{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
