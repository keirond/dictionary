// @ts-check
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        patrick: ['var(--font-patrick-hand)']
      },
      colors: {
        background: 'var(--background)',
        color: 'var(--text)',

        'lvl-1': {
          box: 'var(--lvl-1-box)',
          badge: 'var(--lvl-1-badge)',
          textbox: 'var(--lvl-1-textbox)',
          text: 'var(--lvl-1-text)'
        },
        'lvl-2': {
          box: 'var(--lvl-2-box)',
          badge: 'var(--lvl-2-badge)',
          textbox: 'var(--lvl-2-textbox)',
          text: 'var(--lvl-2-text)'
        },
        'lvl-3': {
          box: 'var(--lvl-3-box)',
          badge: 'var(--lvl-3-badge)',
          textbox: 'var(--lvl-3-textbox)',
          text: 'var(--lvl-3-text)'
        },
        'lvl-4': {
          box: 'var(--lvl-4-box)',
          badge: 'var(--lvl-4-badge)',
          textbox: 'var(--lvl-4-textbox)',
          text: 'var(--lvl-4-text)'
        },
        'lvl-5': {
          box: 'var(--lvl-5-box)',
          badge: 'var(--lvl-5-badge)',
          textbox: 'var(--lvl-5-textbox)',
          text: 'var(--lvl-5-text)'
        }
      }
    }
  },
  safelist: [
    {
      pattern: /bg-lvl-*/
    }
  ],
  plugins: []
} satisfies Config;
