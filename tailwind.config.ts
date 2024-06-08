import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '18rem 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 25rem)',
      },

      borderWidth: {
        6: '6px',
      },

      animation: {
        slideDownAndFade: 'slideDownAndFade 1s cubic-bezier(0.16, 1, 0.3, 1)',
      },

      keyframes: {
        slideDownAndFade: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-0.2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
}
export default config
