/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        'custom': '318deg', 
      },

      keyframes: {
        blink: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
          '100%': { borderColor: 'transparent' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      
    
    },
  },
  plugins: [],
}