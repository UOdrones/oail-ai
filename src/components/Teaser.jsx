import React, { useState } from 'react'
import { motion } from 'framer-motion'

const teasers = [
    {
        icon: '◉',
        title: 'Autonomous Eyes in the Sky',
        hint: 'AI-driven aerial intelligence that sees what humans can\'t.',
        hidden: 'Q3YyNC83IGRyb25lIGFuYWx5dGljcyBwbGF0Zm9ybQ==',
    },
    {
        icon: '⟁',
        title: 'Intelligence That Never Sleeps',
        hint: '24/7 autonomous monitoring. Zero downtime. Zero excuses.',
        hidden: 'UmVhbC10aW1lIHByb2R1Y3Rpb24gQUk=',
    },
    {
        icon: '⬡',
        title: 'The Field, Reimagined',
        hint: 'Every well. Every pad. Every decision. Transformed.',
        hidden: 'T3BlcmF0aW9ucyBvcHRpbWl6YXRpb24gZW5naW5l',
    },
    {
        icon: '◈',
        title: 'Wellhead to Boardroom',
        hint: 'Full-stack data intelligence from sensor to C-suite.',
        hidden: 'RW5kLXRvLWVuZCBkYXRhIHBpcGVsaW5l',
    },
]

export default function Teaser() {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <section id="teaser" className="relative py-24 md:py-32 px-6 bg-black" data-nosnippet>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-orbitron text-xs tracking-[0.4em] text-oailRed mb-4 uppercase">
            // Classified Preview
                    </h2>
                    <p className="font-orbitron text-2xl md:text-4xl font-bold text-white">
                        What's Coming
                    </p>
                    <p className="text-gray-500 mt-3 text-sm max-w-lg mx-auto">
                        We can't tell you everything. Not yet. But here's enough to keep you up at night.
                    </p>
                </motion.div>

                {/* Teaser Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {teasers.map((t, i) => (
                        <motion.div
                            key={i}
                            className="glass-card p-8 cursor-pointer relative overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Icon */}
                            <span className="text-3xl text-oailRed block mb-4 group-hover:animate-glitch">
                                {t.icon}
                            </span>

                            {/* Title */}
                            <h3 className="font-orbitron text-lg md:text-xl text-white mb-3 font-semibold">
                                {t.title}
                            </h3>

                            {/* Hint Text */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {t.hint}
                            </p>

                            {/* Hover Reveal - glitch flash */}
                            {hoveredIndex === i && (
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0.8, 1] }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="font-orbitron text-xs tracking-[0.2em] text-oailRed">
                                        [ FULL REVEAL: MAY 18 ]
                                    </p>
                                </motion.div>
                            )}

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-oailRed/50 to-transparent" />
                                <div className="absolute top-0 right-0 h-[1px] w-8 bg-gradient-to-l from-oailRed/50 to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Section divider */}
            <div className="section-divider mt-24" />
        </section>
    )
}
