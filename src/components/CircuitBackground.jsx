import React from 'react'

const nodePoints = [
  { x: 120, y: 180 },
  { x: 360, y: 260 },
  { x: 640, y: 180 },
  { x: 820, y: 340 },
  { x: 1120, y: 280 },
  { x: 1380, y: 420 },
  { x: 1100, y: 620 },
  { x: 760, y: 720 },
  { x: 480, y: 620 },
  { x: 260, y: 760 },
  { x: 160, y: 560 }
]

const motionPaths = [
  'M120 180 Q 360 210 640 180 T 1120 280',
  'M160 560 Q 360 480 640 520 T 1100 620',
  'M260 760 Q 480 720 760 720 T 1100 620',
  'M360 260 Q 520 200 820 340 T 1380 420',
  'M360 260 Q 500 360 760 340 T 1100 620'
]

export default function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="h-full w-full opacity-55"
        viewBox="0 0 1500 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bgCircuitLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(248,113,113,0.8)" />
            <stop offset="50%" stopColor="rgba(251,191,36,0.85)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0.8)" />
          </linearGradient>
          <radialGradient id="bgNodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="45%" stopColor="rgba(248,113,113,0.85)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          </radialGradient>
          <linearGradient id="spark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="25%" stopColor="rgba(248,113,113,0.8)" />
            <stop offset="60%" stopColor="rgba(251,191,36,0.9)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0.85)" />
          </linearGradient>
        </defs>

        <g
          fill="none"
          stroke="url(#bgCircuitLine)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="[filter:drop-shadow(0_0_24px_rgba(248,113,113,0.25))]"
        >
          <path className="circuit-line" d="M120 180 Q 360 210 640 180 T 1120 280" strokeDasharray="12 14" />
          <path className="circuit-line" d="M360 260 Q 500 360 760 340 T 1100 620" strokeDasharray="14 12" />
          <path className="circuit-line" d="M160 560 Q 360 480 640 520 T 1100 620" strokeDasharray="10 12" />
          <path className="circuit-line" d="M260 760 Q 480 720 760 720 T 1100 620" strokeDasharray="16 12" />
          <path className="circuit-line" d="M360 260 Q 520 200 820 340 T 1380 420" strokeDasharray="18 16" />
        </g>

        <g className="[filter:drop-shadow(0_0_28px_rgba(255,255,255,0.22))]">
          {nodePoints.map((point) => (
            <circle
              key={`${point.x}-${point.y}`}
              cx={point.x}
              cy={point.y}
              r="14"
              fill="url(#bgNodeGlow)"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
              className="circuit-node"
            />
          ))}
        </g>

        <g>
          {motionPaths.map((path, index) => (
            <g key={path} className="mix-blend-screen">
              <circle r="5" fill="url(#spark)" className="shooting-spark">
                <animateMotion
                  dur={`${12 + index * 3}s`}
                  repeatCount="indefinite"
                  path={path}
                  begin={`${index * 1.8}s`}
                />
              </circle>
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
