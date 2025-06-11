import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nico: ['var(--font-nico)'],
        newRocker: ['var(--font-new-rocker)'],
        nunito: ['var(--font-nunito)'],
      },
      colors: {
        'main-gray': '#333333',
        'main-cyan': '#105557',
        'main-blue': '#1B1057',
        'main-red': '#571012',
      },
    },
  },
  plugins: [],
}

export default config
