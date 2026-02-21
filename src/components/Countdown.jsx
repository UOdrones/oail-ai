import { useState, useEffect } from 'react'

export default function Countdown() {
    const target = new Date('2026-05-18T12:00:00-05:00').getTime()
    const [now, setNow] = useState(Date.now())

    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(timer)
    }, [])

    const diff = Math.max(0, target - now)
    const d = Math.floor(diff / 86400000)
    const h = Math.floor((diff % 86400000) / 3600000)
    const m = Math.floor((diff % 3600000) / 60000)
    const s = Math.floor((diff % 60000) / 1000)

    const units = [
        { value: d, label: 'Days' },
        { value: h, label: 'Hrs' },
        { value: m, label: 'Min' },
        { value: s, label: 'Sec' },
    ]

    return (
        <div className="text-center">
            <p className="font-semibold text-[var(--cream)] mb-6 uppercase" style={{ fontSize: '13px', letterSpacing: '0.2em' }}>
                Launching In
            </p>
            <div className="flex items-center gap-3 md:gap-5">
                {units.map((u, i) => (
                    <div key={u.label} className="flex items-center gap-3 md:gap-5">
                        <div className="text-center">
                            <span className="block text-3xl md:text-5xl font-black text-[var(--cream)] tabular-nums" style={{ letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>
                                {String(u.value).padStart(2, '0')}
                            </span>
                            <span className="block text-[9px] md:text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--ink-tertiary)] mt-2">
                                {u.label}
                            </span>
                        </div>
                        {i < 3 && (
                            <span className="text-xl md:text-2xl font-light text-[var(--cream)]">:</span>
                        )}
                    </div>
                ))}
            </div>
            <p className="text-xs md:text-sm text-[var(--cream)] mt-6 tracking-wider uppercase font-semibold">
                May 18, 2026 · 12:00 PM CT
            </p>
        </div>
    )
}
