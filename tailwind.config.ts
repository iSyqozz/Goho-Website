import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dark1: "#303F43",
        dark2: "#394749",
        darkest: "#222b2c",
        light1: "#BDC1C3",
        light2: "#E7E9E9",
        primary: "#E6C780",
      }
    },
  },
  plugins: [],
}
export default config
