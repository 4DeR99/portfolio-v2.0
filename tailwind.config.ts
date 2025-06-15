import type { Config } from 'tailwindcss'
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    extend: {
      screens: {
        ...screens,
        xxs: '20.3125rem',
        '3xl': '120rem',
        '4k': '160rem',
      },
      fontSize,
      fontFamily: {
        nico: ['var(--font-nico)'],
        newRocker: ['var(--font-new-rocker)'],
        nunito: ['var(--font-nunito)'],
        novaSquare: ['var(--font-nova-square)'],
      },
      colors: {
        'main-gray': '#333333',
        'main-cyan': '#105557',
        'main-blue': '#1B1057',
        'main-red': '#571012',
      },
    },
  },
  plugins: [fluid({ checkSC144: false })],
}

export default config
