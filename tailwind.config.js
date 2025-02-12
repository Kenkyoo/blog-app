/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {  
    extend: {
      fontFamily: {
        sans: ['InterVariable', '...defaultTheme.fontFamily.sans'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake", "luxury", "dracula", "night", "acid", "nord", "dim", "sunset", "business", "synthwave", "fantasy", "pastel"],
  },
}

