import { motion } from 'framer-motion'

const plays = [
    { name: 'Permian', region: 'West Texas / New Mexico', status: 'Primary' },
    { name: 'Bakken', region: 'North Dakota / Montana', status: 'HQ' },
    { name: 'Eagle Ford', region: 'South Texas', status: 'Expanding' },
    { name: 'DJ Basin', region: 'Colorado / Wyoming', status: 'Targeting' },
    { name: 'Marcellus', region: 'Appalachia', status: 'Targeting' },
    { name: 'SCOOP/STACK', region: 'Oklahoma', status: 'Targeting' },
]

const stats = [
    { value: '9.5M+', label: 'US Barrels / Day' },
    { value: '6', label: 'Major Basins' },
    { value: '24/7', label: 'Autonomous Ops' },
    { value: '∞', label: 'Upside' },
]

export default function BakkenAI() {
    return (
        <section id="coverage" className="section-padding section-dark">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="section-label mb-8" style={{ color: 'rgba(241,240,234,0.5)' }}>Coverage</p>
                    <h2 className="headline-large">
                        Every major play.<br />
                        One intelligence platform.
                    </h2>
                </motion.div>

                <motion.p
                    className="body-text max-w-xl mt-8 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    From the Permian to the Bakken, Eagle Ford to the Marcellus — we deploy AI where it matters most.
                    In the field. On the pad. At the <span className="redacted">wellhead</span>.
                </motion.p>

                <div className="divider mt-12" />

                {/* Basin Rows */}
                {plays.map((play, i) => (
                    <motion.div
                        key={i}
                        className="grid-row"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.4 }}
                    >
                        <p className="text-2xl md:text-3xl font-bold" style={{ letterSpacing: '-0.02em' }}>
                            {play.name}
                        </p>
                        <p style={{ color: 'rgba(241,240,234,0.6)' }} className="text-sm md:text-base">
                            {play.region}
                        </p>
                        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: play.status === 'HQ' ? 'var(--oail-red)' : 'rgba(241,240,234,0.4)' }}>
                            {play.status}
                        </p>
                    </motion.div>
                ))}

                {/* Stats row */}
                <div className="divider mt-4" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-0">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="py-10"
                            style={{ borderRight: i < 3 ? '1px solid rgba(241,240,234,0.08)' : 'none' }}
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
                        we're deploying <span className="redacted">autonomous intelligence.</span>"
                    </blockquote>
                    <p className="text-[11px] font-medium tracking-[0.15em] uppercase mt-6" style={{ color: 'rgba(241,240,234,0.35)' }}>
                        There's a difference.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
