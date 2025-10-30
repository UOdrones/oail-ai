export default function Contact() {
  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-3xl text-white font-bold mb-6">Get in Touch</h2>
      <p className="text-gray-400 mb-4">Interested in partnering, investing, or collaborating?</p>
      <a
        href="mailto:contact@oail.ai"
        className="text-oailRed border border-oailRed px-6 py-3 rounded-lg hover:bg-oailRed hover:text-white transition"
      >
        contact@oail.ai
      </a>
      <p className="text-gray-600 mt-10 text-sm">© {new Date().getFullYear()} OAIL.ai</p>
    </section>
  )
}
