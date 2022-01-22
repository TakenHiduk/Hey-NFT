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
        accent: { DEFAULT: '', dark: '' },
        success: { DEFAULT: '', dark: '' },
        danger: { DEFAULT: '', dark: '' },
        warning: { DEFAULT: '', dark: '' },
        info: { DEFAULT: '', dark: '' },
      },
    },
  },
  plugins: [],
};
