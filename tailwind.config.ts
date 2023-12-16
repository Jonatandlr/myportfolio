import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'Homebg': 'linear-gradient(0deg, rgba(0,0,0,0.75), rgba(0,0,0,0.75)),url("/images/bg/HomeBg.jpg")',
      },
      colors: {
        'Custom-red': '#F80040',
        'Custom-blueDark': '#1C1E24',
        'Custom-blueLight': '#2B313A',
      },
      fontFamily:{
        'Poppins': ['Poppins, sans-serif']
      },
    },
  },
  plugins: [
   
  ],
}
export default config
