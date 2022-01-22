module.exports = {
  mode: 'jit',
  separator: '_',
  darkMode: 'media', // false || 'media' || 'class'
  content: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: { DEFAULT: '#E8F1FF', dark: '#1D1D1F' }, // #1F2029
        secondary: { DEFAULT: '#FFFFFF', dark: '#3D3D3F' }, // #282932
      },

      textColor: {
        primary: { DEFAULT: '#231F20', dark: '#FFFFFF' },
        secondary: { DEFAULT: '#758391', dark: '#AAABB4' },
      },

      borderColor: {
        primary: { DEFAULT: '', dark: '' },
      },

      colors: {
        accent: { DEFAULT: '#A976FE', dark: '#DB5AEE' },
        success: { DEFAULT: '#00BE74', dark: '#1AD598' },
        danger: { DEFAULT: '#FF2D59', dark: '#F2393B' },
        warning: { DEFAULT: '#FD6601', dark: '#F9B959' },
        info: { DEFAULT: '#0091FF', dark: '#0090FF' },
      },
    },
  },
  plugins: [],
};
