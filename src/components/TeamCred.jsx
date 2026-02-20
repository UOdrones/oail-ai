import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '+' }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    useEffect(() => {
        if (!inView) return
        let start = 0
        const step = target / 60
        const timer = setInterval(() => {
            start += step
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [inView, target])

    return (
        <span ref={ref} className="font-orbitron text-5xl md:text-7xl font-black text-chrome-shine block">
            {count}<span className="text-oailRed">{suffix}</span>
        </span>
    )
}

const creds = [
    { years: 10, role: 'Production Operations', desc: 'Wellsite supervision. Artificial lift. Production facilities. We know what keeps oil flowing because we\'ve done it.' },
    { years: 21, role: 'Frac & Completions', desc: 'Hydraulic fracturing. Well completions. Pressure pumping. Two decades of breaking rock and building wells.' },
    { years: 20, role: 'Service Side O&G', desc: 'Equipment logistics. Field services. Vendor management. The operational backbone that keeps every job on time.' },
]

const techTeam = ['TARGET', 'SAMSUNG', 'DOD', 'FORTUNE 500']

export default function TeamCred() {
    return (
        <section id="team" className="relative py-32 md:py-40 px-6 surface-alt">
            <div className="max-w-5xl mx-auto">

                {/* Section label */}
                <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-8 h-px bg-oailRed/60" />
                    <span className="font-orbitron text-[9px] tracking-[0.5em] text-oailRed uppercase">
                        The Team
                    </span>
                </motion.div>

                {/* Header */}
                <motion.h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Built by operators.<br />
                    <span className="text-chrome">Engineered by elite.</span>
                </motion.h2>

                <motion.p
                    className="text-gray-300 text-sm md:text-base max-w-lg mb-20 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    51+ combined years of field experience. A tech team that built for the world's most demanding organizations.
                    This isn't a startup playing oil & gas. This is oil & gas building its own future.
                </motion.p>

                {/* Credential pillars */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {creds.map((c, i) => (
                        <motion.div
                            key={i}
                            className="glass glass-hover card-glow rounded-xl p-8 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                        >
                            <Counter target={c.years} />
                            <p className="font-orbitron text-[8px] tracking-[0.3em] text-oailRed/80 mt-3 mb-4 uppercase">Years</p>
                            <h3 className="font-orbitron text-xs tracking-[0.2em] text-white mb-4 uppercase font-semibold">
                                {c.role}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech team */}
                <motion.div
                    className="glass rounded-xl p-10 md:p-14 text-center relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-oailRed/40 to-transparent" />

                    <p className="font-orbitron text-[9px] tracking-[0.4em] text-gray-500 uppercase mb-4">
                        Engineering Pedigree
                    </p>
                    <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                        Our engineers built enterprise applications for
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                        {techTeam.map((name, i) => (
                            <motion.span
                                key={name}
                                className="px-5 py-2.5 rounded-lg border border-white/15 font-orbitron text-[10px] md:text-xs tracking-[0.2em] text-white/90 hover:border-oailRed/50 hover:text-oailRed transition-all duration-300"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                            >
                                {name}
                            </motion.span>
                        ))}
                    </div>

                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                        Now they're building the most advanced AI platform the energy industry has ever seen.
                    </p>
                </motion.div>
            </div>

            <div className="hr-glow mt-32 mx-auto w-1/2" />
        </section>
    )
}
