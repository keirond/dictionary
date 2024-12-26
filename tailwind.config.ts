// @ts-check
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        patrick: ['var(--font-patrick-hand)']
      }
    }
  },
  plugins: []
} satisfies Config;
