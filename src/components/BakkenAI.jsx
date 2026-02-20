import React from 'react'
import { motion } from 'framer-motion'

const plays = [
    { name: 'PERMIAN', region: 'West Texas / New Mexico', status: 'PRIMARY' },
    { name: 'BAKKEN', region: 'North Dakota / Montana', status: 'HQ' },
    { name: 'EAGLE FORD', region: 'South Texas', status: 'EXPANDING' },
    { name: 'DJ BASIN', region: 'Colorado / Wyoming', status: 'TARGETING' },
    { name: 'MARCELLUS', region: 'Appalachia', status: 'TARGETING' },
    { name: 'SCOOP/STACK', region: 'Oklahoma', status: 'TARGETING' },
]

const stats = [
    { value: '9.5M+', label: 'US Barrels / Day' },
    { value: '6', label: 'Major Basin Coverage' },
    { value: '24/7', label: 'Autonomous Ops' },
    { value: '∞', label: 'Upside with AI' },
]

export default function BakkenAI() {
    return (
        <section id="coverage" className="relative py-32 md:py-40 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto">

                {/* Section label */}
                <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-8 h-px bg-oailRed/60" />
                    <span className="font-orbitron text-[9px] tracking-[0.5em] text-oailRed/70 uppercase">
                        Coverage
                    </span>
                </motion.div>

                {/* Header */}
                <motion.h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Every major play.<br />
                    <span className="text-chrome">One intelligence platform.</span>
                </motion.h2>

                <motion.p
                    className="text-gray-500 text-sm md:text-base max-w-lg mb-16 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    From the Permian to the Bakken, Eagle Ford to the Marcellus — we deploy AI where it matters most.
                    <span className="text-white font-medium"> In the field. On the pad. At the wellhead.</span>
                </motion.p>

                {/* Plays grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-20">
                    {plays.map((play, i) => (
                        <motion.div
                            key={i}
                            className="glass glass-hover card-glow rounded-xl p-6 text-center relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                        >
                            {play.status === 'HQ' && (
                                <span className="absolute top-3 right-3 font-orbitron text-[6px] tracking-[0.2em] text-oailRed px-2 py-0.5 rounded border border-oailRed/30 uppercase">
                                    {play.status}
                                </span>
                            )}
                            <p className="font-orbitron text-sm md:text-base font-bold text-white tracking-[0.1em]">
                                {play.name}
                            </p>
                            <p className="text-gray-600 text-[10px] md:text-xs mt-1.5">{play.region}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Manifesto quote */}
                <motion.div
                    className="glass rounded-xl p-10 md:p-14 text-center relative mb-16"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-px bg-gradient-to-r from-transparent via-oailRed/40 to-transparent" />
                    <blockquote className="text-lg md:text-2xl text-white font-semibold leading-relaxed max-w-2xl mx-auto">
                        "While the rest of the industry is still talking about
                        <span className="text-oailRed"> digital transformation</span>,
                        we're deploying
                        <span className="text-oailRed"> autonomous intelligence.</span>"
                    </blockquote>
                    <p className="font-orbitron text-[8px] tracking-[0.3em] text-gray-700 mt-6 uppercase">
                        There's a difference.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="glass rounded-xl p-6 text-center"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                        >
                            <span className="font-orbitron text-2xl md:text-3xl font-black text-oailRed block mb-2">
                                {stat.value}
                            </span>
                            <span className="font-orbitron text-[7px] md:text-[8px] tracking-[0.2em] text-gray-600 uppercase">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="hr-glow mt-32 mx-auto w-1/2" />
        </section>
    )
}
