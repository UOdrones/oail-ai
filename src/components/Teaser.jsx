import { motion } from 'framer-motion'

const intel = [
    {
        codename: 'PROJECT OVERWATCH',
        summary: 'Autonomous aerial intelligence.',
        desc: <>AI-guided drone fleets that see what humans can't. Every well. Every pipeline. Every threat. Captured, processed, and actioned <span className="redacted">without a pilot</span>.</>,
        status: 'Active Development',
    },
    {
        codename: 'PROJECT SENTINEL',
        summary: '24/7 autonomous monitoring.',
        desc: <>Real-time anomaly detection. <span className="redacted">Zero-latency response</span>. No human in the loop. Continuous surveillance that never sleeps and never misses.</>,
        status: 'Field Testing',
    },
    {
        codename: 'PROJECT NEXUS',
        summary: 'Full-stack data intelligence.',
        desc: <>Wellhead to boardroom. <span className="redacted">Sensor to C-suite</span>. One unified nervous system that connects every data point across your <span className="redacted">entire operation</span>.</>,
        status: 'Architecture Complete',
    },
    {
        codename: 'PROJECT GENESIS',
        summary: 'The platform that replaces the rest.',
        desc: <>We're not iterating on what exists. We're <span className="redacted">replacing it</span>. A <span className="redacted">ground-up rethinking</span> of how energy operations should work in the <span className="redacted">age of AI</span>.</>,
        status: 'Classified',
    },
]

export default function Teaser() {
    return (
        <section id="teaser" className="section-padding" data-nosnippet>
            <div className="max-w-6xl mx-auto">

                {/* Section header */}
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="headline-large">
                        Four projects.<br />
                        Zero precedent.
                    </h2>
                </motion.div>

                <div className="divider mt-12" />

                {/* Intel Grid Rows */}
                {intel.map((item, i) => (
                    <motion.div
                        key={i}
                        className="grid-row"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                    >
                        <div>
                            <p className="section-label">{item.codename}</p>
                            <span
                                className="inline-block mt-3 text-[10px] font-semibold tracking-wider uppercase"
                                style={{ color: item.status === 'Classified' ? 'var(--oail-red)' : 'var(--ink-tertiary)' }}
                            >
                                {item.status}
                            </span>
                        </div>
                        <p className="summary-text">{item.summary}</p>
                        <p className="body-text">{item.desc}</p>
                    </motion.div>
                ))}

                {/* FOMO line */}
                <div className="divider" />
                <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--ink-tertiary)] mt-8 text-right">
                    Full reveal · May 18, 2026
                </p>
            </div>
        </section>
    )
}
