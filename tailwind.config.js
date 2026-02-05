module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        app: 'rgb(var(--color-background) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)'
      }

    }
  },
  plugins: [],
};
