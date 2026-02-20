import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TARGET_DATE = new Date('2026-05-18T12:00:00-05:00').getTime()

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft())

    function getTimeLeft() {
        const now = Date.now()
        const diff = Math.max(0, TARGET_DATE - now)
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        }
    }

    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
        return () => clearInterval(interval)
    }, [])

    const digits = [
        { value: timeLeft.days, label: 'DAYS' },
        { value: timeLeft.hours, label: 'HOURS' },
        { value: timeLeft.minutes, label: 'MINUTES' },
        { value: timeLeft.seconds, label: 'SECONDS' },
    ]

    return (
        <div className="flex flex-col items-center">
            <motion.p
                className="font-orbitron text-xs md:text-sm tracking-[0.3em] text-oailRed mb-6 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Something Big Is Coming
            </motion.p>

            <div className="flex gap-3 md:gap-5">
                {digits.map((d, i) => (
                    <motion.div
                        key={d.label}
                        className="countdown-digit"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                    >
                        <span className="font-orbitron text-3xl md:text-5xl font-bold text-white block neon-red">
                            {String(d.value).padStart(2, '0')}
                        </span>
                        <span className="font-orbitron text-[9px] md:text-[10px] tracking-[0.2em] text-gray-500 mt-1 block">
                            {d.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            <motion.p
                className="font-orbitron text-[10px] md:text-xs tracking-widest text-gray-600 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                MAY 18, 2026 &bull; 12:00 PM CT
            </motion.p>
        </div>
    )
}
