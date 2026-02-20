import React, { useState } from 'react'
import { motion } from 'framer-motion'

const intel = [
    {
        icon: '⬡',
        codename: 'PROJECT OVERWATCH',
        hint: 'Autonomous aerial intelligence that sees what humans can\'t. Every well. Every pipeline. Every threat.',
        status: 'ACTIVE DEVELOPMENT',
    },
    {
        icon: '◉',
        codename: 'PROJECT SENTINEL',
        hint: '24/7 autonomous monitoring. Real-time anomaly detection. Zero-latency response. No human in the loop.',
        status: 'FIELD TESTING',
    },
    {
        icon: '⟁',
        codename: 'PROJECT NEXUS',
        hint: 'Full-stack data intelligence. Wellhead to boardroom. Sensor to C-suite. One unified nervous system.',
        status: 'ARCHITECTURE COMPLETE',
    },
    {
        icon: '◈',
        codename: 'PROJECT GENESIS',
        hint: 'The platform that makes every other platform obsolete. We\'re not iterating. We\'re replacing.',
        status: 'CLASSIFIED',
    },
]

export default function Teaser() {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <section id="teaser" className="relative py-32 md:py-40 px-6 surface-alt" data-nosnippet>
            <div className="max-w-5xl mx-auto">

                {/* Section label */}
                <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-8 h-px bg-oailRed/60" />
                    <span className="font-orbitron text-[9px] tracking-[0.5em] text-oailRed uppercase">
                        Classified Intelligence
                    </span>
                </motion.div>

                {/* Header */}
                <motion.h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Four projects.<br />
                    <span className="text-chrome">Zero precedent.</span>
                </motion.h2>

                <motion.p
                    className="text-gray-400 text-sm md:text-base max-w-lg mb-16 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    We can't tell you everything. Not yet. But here's enough to know you don't want to be on the wrong side of this.
                </motion.p>

                {/* Intel Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                    {intel.map((item, i) => (
                        <motion.div
                            key={i}
                            className="glass glass-hover card-glow rounded-xl p-8 cursor-default relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Status badge */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-2xl">{item.icon}</span>
                                <span className="font-orbitron text-[7px] tracking-[0.3em] text-oailRed/70 uppercase px-3 py-1 rounded-full border border-oailRed/20">
                                    {item.status}
                                </span>
                            </div>

                            {/* Codename */}
                            <h3 className="font-orbitron text-sm md:text-base text-white mb-3 tracking-[0.15em] font-semibold uppercase">
                                {item.codename}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.hint}
                            </p>

                            {/* Hover overlay */}
                            {hoveredIndex === i && (
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="text-center">
                                        <p className="font-orbitron text-[10px] tracking-[0.3em] text-oailRed mb-1">
                                            [ FULL REVEAL ]
                                        </p>
                                        <p className="font-orbitron text-xs tracking-[0.2em] text-white">
                                            MAY 18, 2026
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0">
                                <div className="w-px h-6 bg-gradient-to-b from-oailRed/40 to-transparent absolute top-0 right-4" />
                                <div className="h-px w-6 bg-gradient-to-l from-oailRed/40 to-transparent absolute top-4 right-0" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* FOMO note */}
                <motion.p
                    className="text-center text-gray-500 text-xs mt-12 font-orbitron tracking-[0.3em] uppercase"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    Early access is not guaranteed
                </motion.p>
            </div>

            <div className="hr-glow mt-32 mx-auto w-1/2" />
        </section>
    )
}
