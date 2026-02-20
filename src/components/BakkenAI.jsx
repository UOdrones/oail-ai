import React from 'react'
import { motion } from 'framer-motion'

const oilPlays = [
    { name: 'BAKKEN', region: 'North Dakota / Montana' },
    { name: 'PERMIAN', region: 'West Texas / New Mexico' },
    { name: 'EAGLE FORD', region: 'South Texas' },
    { name: 'DJ BASIN', region: 'Colorado / Wyoming' },
    { name: 'MARCELLUS', region: 'Appalachia' },
    { name: 'SCOOP/STACK', region: 'Oklahoma' },
]

const stats = [
    { value: '9.5M+', label: 'Barrels/Day US Production' },
    { value: '6', label: 'Major Basins. One Platform.' },
    { value: '24/7', label: 'Autonomous Monitoring' },
    { value: '∞', label: 'Potential with AI' },
]

export default function BakkenAI() {
    return (
        <section id="coverage" className="relative py-24 md:py-32 px-6 bg-black overflow-hidden">
            {/* Circuit overlay */}
            <div className="absolute inset-0 circuit-bg opacity-40" />

            {/* Accent lines */}
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-oailRed/20 to-transparent" />
            <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-oailRed/10 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-orbitron text-xs tracking-[0.4em] text-oailRed mb-4 uppercase">
            // AI × Energy
                    </h2>
                    <p className="font-orbitron text-2xl md:text-4xl font-bold text-white mb-4">
                        Every Major Play.
                        <br />
                        <span className="text-oailRed">One Intelligence Platform.</span>
                    </p>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        From the Permian to the Bakken, Eagle Ford to the Marcellus — we're deploying
                        AI where it matters most.
                        <span className="text-white font-semibold"> In the field. On the pad. At the wellhead.</span>
                    </p>
                </motion.div>

                {/* Oil Plays Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
                    {oilPlays.map((play, i) => (
                        <motion.div
                            key={i}
                            className="glass-card p-5 text-center group cursor-default"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                        >
                            <span className="font-orbitron text-sm md:text-base font-bold text-white group-hover:text-oailRed transition-colors">
                                {play.name}
                            </span>
                            <p className="text-gray-600 text-[10px] md:text-xs mt-1 font-inter">
                                {play.region}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bold Statement */}
                <motion.div
                    className="glass p-10 md:p-14 text-center mb-16 relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-oailRed to-transparent" />

                    <blockquote className="font-orbitron text-lg md:text-2xl text-white font-bold leading-relaxed">
                        "While the rest of the industry is still talking about
                        <br className="hidden md:block" />
                        <span className="text-oailRed"> digital transformation</span>,
                        we're deploying
                        <br className="hidden md:block" />
                        <span className="text-oailRed"> autonomous intelligence.</span>"
                    </blockquote>
                    <p className="font-orbitron text-xs tracking-[0.2em] text-gray-600 mt-6">
                        THERE'S A DIFFERENCE.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="glass-card p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <span className="font-orbitron text-2xl md:text-3xl font-black text-oailRed block mb-2">
                                {stat.value}
                            </span>
                            <span className="font-orbitron text-[9px] md:text-[10px] tracking-[0.15em] text-gray-500 uppercase">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Tag */}
                <motion.p
                    className="text-center text-gray-600 font-orbitron text-xs tracking-[0.3em] mt-16 uppercase"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    Bakken &bull; Permian &bull; Eagle Ford &bull; DJ Basin &bull; Marcellus &bull; SCOOP/STACK
                </motion.p>
            </div>

            {/* Section divider */}
            <div className="section-divider mt-24" />
        </section>
    )
}
