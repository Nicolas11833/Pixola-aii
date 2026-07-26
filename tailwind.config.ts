import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          void: '#0A0C14',
          deep: '#0E111C',
          surface: '#131829',
          raised: '#1A2036',
          border: '#252C47',
        },
        brand: {
          blue: '#4F7CFF',
          blueSoft: '#7C9CFF',
          purple: '#9B5DE5',
          purpleSoft: '#C084FC',
          pink: '#E85DA8',
        },
        ink: {
          primary: '#EEF0F8',
          secondary: '#AEB4CC',
          muted: '#7A8099',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4F7CFF 0%, #9B5DE5 60%, #E85DA8 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(79,124,255,0.15) 0%, rgba(155,93,229,0.15) 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(79,124,255,0.25), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,156,255,0.25)',
        card: '0 8px 30px rgba(0,0,0,0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'marquee-slow': 'marquee 70s linear infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
      borderRadius: { xl2: '1.25rem' },
    },
  },
  plugins: [],
};

export default config;
