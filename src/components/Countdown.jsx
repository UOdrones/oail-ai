import React, { useState, useEffect } from 'react'

export default function Countdown() {
    const target = new Date('2026-05-18T12:00:00-05:00').getTime()
    const [now, setNow] = useState(Date.now())

    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(id)
    }, [])

    const diff = Math.max(0, target - now)
    const days = Math.floor(diff / 86400000)
    const hours = Math.floor((diff % 86400000) / 3600000)
    const minutes = Math.floor((diff % 3600000) / 60000)
    const seconds = Math.floor((diff % 60000) / 1000)

    const units = [
        { value: days, label: 'DAYS' },
        { value: hours, label: 'HRS' },
        { value: minutes, label: 'MIN' },
        { value: seconds, label: 'SEC' },
    ]

    return (
        <div className="flex flex-col items-center gap-6">
            {/* Label */}
            <p className="font-orbitron text-[9px] md:text-[10px] tracking-[0.5em] text-oailRed/70 uppercase">
                Launching In
            </p>

            {/* Digits */}
            <div className="flex items-center gap-3 md:gap-4">
                {units.map((u, i) => (
                    <div key={u.label} className="flex items-center gap-3 md:gap-4">
                        <div className="flex flex-col items-center">
                            <div className="countdown-digit rounded-lg px-4 py-3 md:px-5 md:py-4 min-w-[60px] md:min-w-[72px]">
                                <span className="font-orbitron text-2xl md:text-3xl font-bold text-white block text-center">
                                    {String(u.value).padStart(2, '0')}
                                </span>
                            </div>
                            <span className="font-orbitron text-[7px] tracking-[0.3em] text-gray-600 mt-2">
                                {u.label}
                            </span>
                        </div>
                        {i < units.length - 1 && (
                            <span className="text-oailRed/30 text-xl font-light mb-5">:</span>
                        )}
                    </div>
                ))}
            </div>

            {/* Date */}
            <p className="font-orbitron text-[8px] tracking-[0.4em] text-gray-700">
                MAY 18, 2026 · 12:00 PM CT
            </p>
        </div>
    )
}
