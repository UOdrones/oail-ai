import { motion } from 'framer-motion'
import FloatingMesh from './FloatingMesh'
import CoverageMap from './CoverageMap'

const stats = [
    { value: '100%', label: 'US Asset Coverage' },
    { value: '30+', label: 'Producing Basins' },
    { value: '24/7', label: 'Real-time Ingestion' },
    { value: '0', label: 'Blind Spots' },
]

export default function BakkenAI() {
    return (
        <section id="coverage" className="section-padding section-dark relative overflow-hidden">
            {/* Removed FloatingMesh per user request to get rid of white background */}
            <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>

                {/* Header */}
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="section-label mb-8" style={{ color: 'rgba(241,240,234,0.5)' }}>Coverage</p>
                    <h2 className="headline-large">
                        Total US Coverage.<br />
                        30+ Plays. One intelligence platform.
                    </h2>
                </motion.div>

                <motion.p
                    className="body-text max-w-[650px] mt-8 mb-4 text-[var(--ink-secondary)] leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    From the offshore platforms of the Gulf of America to the high-density pads of the Permian and the remote frontiers of the Alaska North Slope - we ingest and structure operational reality across the entire domestic footprint.
                </motion.p>

                {/* Coverage Map */}
                <div className="mt-12 w-full">
                    <CoverageMap />
                </div>

                {/* Stats row */}
                <div className="divider mt-4" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-0">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className={`py-8 md:py-10 border-[rgba(241,240,234,0.08)] ${i % 2 === 0 ? 'border-r md:border-r-0' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} ${i < 3 ? 'md:border-r' : ''}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.4 }}
                        >
                            <span className="block text-3xl md:text-4xl font-black" style={{ letterSpacing: '-0.03em', color: 'var(--cream)' }}>
                                {stat.value}
                            </span>
                            <span className="block text-[10px] font-semibold tracking-[0.15em] uppercase mt-2" style={{ color: 'rgba(241,240,234,0.4)' }}>
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Manifesto */}
                <div className="divider mt-4" />
                <motion.div
                    className="py-20 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed" style={{ color: 'var(--cream)' }}>
                        "While the rest of the industry is still talking about digital transformation,
                        we're deploying autonomous intelligence."
                    </blockquote>
                    <p className="text-[11px] font-medium tracking-[0.15em] uppercase mt-6" style={{ color: 'rgba(241,240,234,0.35)' }}>
                        There's a difference.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
