module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        oailRed: '#cc0000',
        ember: '#ff2200',
        crimson: '#8b0000',
        charcoal: '#1a1a1a',
        obsidian: '#0d0d0d',
        smoke: '#2a2a2a',
        ash: '#3a3a3a',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'counter-roll': 'counterRoll 2s ease-out forwards',
        'typewriter': 'typewriter 4s steps(60) 1s forwards',
        'blink': 'blink 1s step-end infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204,0,0,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(204,0,0,0.8)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-1px, -2px)' },
          '80%': { transform: 'translate(1px, 1px)' },
          '100%': { transform: 'translate(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { top: '-5%' },
          '100%': { top: '105%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        counterRoll: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'rgba(204,0,0,1)' },
          '50%': { borderColor: 'transparent' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(204,0,0,0.3)' },
          '50%': { borderColor: 'rgba(204,0,0,0.8)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
