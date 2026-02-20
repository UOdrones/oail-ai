import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useEffect(() => {
        if (!isInView) return
        let start = 0
        const increment = target / (duration / 16)
        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [isInView, target, duration])

    return (
        <span ref={ref} className="font-orbitron text-4xl md:text-6xl font-black text-white neon-red">
            {count}{suffix}
        </span>
    )
}

const credentials = [
    {
        years: 10,
        label: 'PRODUCTION OPERATIONS',
        desc: 'Wellsite supervision, artificial lift optimization, production facility management. We know what keeps the oil flowing.',
        icon: '🛢️',
    },
    {
        years: 21,
        label: 'FRAC & COMPLETIONS',
        desc: 'Hydraulic fracturing, well completion design, pressure pumping operations. Two decades of breaking rock and building wells.',
        icon: '💥',
    },
    {
        years: 20,
        label: 'SERVICE SIDE O&G',
        desc: 'Equipment logistics, field services, vendor management. The operational backbone that keeps every job on schedule.',
        icon: '⚙️',
    },
]

export default function TeamCred() {
    return (
        <section id="team" className="relative py-24 md:py-32 px-6 bg-black circuit-bg" data-nosnippet>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-orbitron text-xs tracking-[0.4em] text-oailRed mb-4 uppercase">
            // Credentials
                    </h2>
                    <p className="font-orbitron text-2xl md:text-4xl font-bold text-white">
                        Built by Operators.
                        <br />
                        <span className="text-oailRed">Engineered by Elite.</span>
                    </p>
                </motion.div>

                {/* Credential Pillars */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {credentials.map((cred, i) => (
                        <motion.div
                            key={i}
                            className="glass-card p-8 text-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.7 }}
                        >
                            <span className="text-3xl block mb-4">{cred.icon}</span>
                            <AnimatedCounter target={cred.years} suffix="+" />
                            <p className="font-orbitron text-[10px] md:text-xs tracking-[0.25em] text-oailRed mt-3 mb-4 uppercase">
                                YEARS
                            </p>
                            <h3 className="font-orbitron text-sm tracking-wider text-white mb-3 font-semibold uppercase">
                                {cred.label}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {cred.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Team Callout */}
                <motion.div
                    className="glass p-8 md:p-12 text-center relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Background accent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-oailRed/5 via-transparent to-oailRed/5" />

                    <div className="relative z-10">
                        <h3 className="font-orbitron text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">
                            The Tech Team
                        </h3>
                        <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                            Our engineers built enterprise applications for
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
                            {['TARGET', 'SAMSUNG', 'DOD', 'AND MORE'].map((name, i) => (
                                <motion.div
                                    key={name}
                                    className="px-5 py-2 border border-gray-700 rounded font-orbitron text-xs md:text-sm tracking-wider text-white hover:border-oailRed hover:text-oailRed transition-all duration-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.15 }}
                                >
                                    {name}
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm max-w-xl mx-auto">
                            Now they're building the most advanced AI platform the oil &amp; gas industry has ever seen.
                            <span className="text-oailRed"> No pressure.</span>
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Section divider */}
            <div className="section-divider mt-24" />
        </section>
    )
}
