import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '+' }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    useEffect(() => {
        if (!inView) return
        let start = 0
        const step = target / 50
        const timer = setInterval(() => {
            start += step
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 20)
        return () => clearInterval(timer)
    }, [inView, target])

    return (
        <span ref={ref} className="text-5xl md:text-7xl font-black text-[var(--ink)] block" style={{ letterSpacing: '-0.04em' }}>
            {count}<span className="text-[var(--oail-red)]">{suffix}</span>
        </span>
    )
}

const creds = [
    { years: 10, role: 'Production Operations', desc: 'Wellsite supervision. Artificial lift. Production facilities. We know what keeps oil flowing because we\'ve done it.' },
    { years: 21, role: 'Frac & Completions', desc: 'Hydraulic fracturing. Well completions. Pressure pumping. Two decades of breaking rock and building wells.' },
    { years: 20, role: 'Service Side O&G', desc: 'Equipment logistics. Field services. Vendor management. The operational backbone that keeps every job on time.' },
]

const techTeam = ['Target', 'Samsung', 'DOD', 'Fortune 500']

export default function TeamCred() {
    return (
        <section id="team" className="section-padding">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="section-label text-[var(--ink-tertiary)] mb-8">The Team</p>
                    <h2 className="headline-large max-w-4xl">
                        Built by operators.<br />Engineered by elite.
                    </h2>
                </motion.div>

                <motion.p
                    className="body-text max-w-xl mt-8 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    51+ combined years of field experience. A tech team that built for the world's most demanding organizations.
                    This isn't a startup playing oil & gas. This is oil & gas building its own future.
                </motion.p>

                <div className="divider mt-12" />

                {/* Credential rows */}
                {creds.map((c, i) => (
                    <motion.div
                        key={i}
                        className="grid-row items-start"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                    >
                        <div>
                            <Counter target={c.years} />
                            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--ink-tertiary)] mt-2">Years</p>
                        </div>
                        <p className="summary-text font-semibold">{c.role}</p>
                        <p className="body-text">{c.desc}</p>
                    </motion.div>
                ))}

                {/* Engineering Pedigree */}
                <div className="divider" />
                <motion.div
                    className="py-16"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="section-label text-[var(--ink-tertiary)] mb-6">Engineering Pedigree</p>
                    <p className="summary-text max-w-lg mb-8">
                        Our engineers built enterprise applications for
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {techTeam.map((name) => (
                            <span
                                key={name}
                                className="px-5 py-2.5 text-[12px] font-semibold tracking-[0.1em] uppercase text-[var(--ink)] hover:text-[var(--oail-red)] transition-colors"
                                style={{ border: '1px solid var(--divider-strong)' }}
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                    <p className="body-text mt-8 max-w-md">
                        Now they're building the most advanced AI platform the energy industry has ever seen.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
