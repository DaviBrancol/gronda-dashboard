module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/{components,pages,screens}/**/*.{js,ts,jsx,tsx}'],
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      fontSize: {
        tiny: '.730rem',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: {
          100: '#CCEDFC',
          200: '#9CD6F9',
          300: '#68B5ED',
          400: '#4194DB',
          500: '#0D66C4',
          600: '#094FA8',
          700: '#063A8D',
          800: '#042971',
          900: '#021D5E',
        },
        success: {
          100: '#EAFBD1',
          200: '#D1F8A4',
          300: '#ADEB74',
          400: '#87D84F',
          500: '#56BF1E',
          600: '#3EA415',
          700: '#2A890F',
          800: '#196E09',
          900: '#0D5B05',
        },
        warning: {
          100: '#FDEDCB',
          200: '#FBD798',
          300: '#F3B864',
          400: '#E7983D',
          500: '#D86B04',
          600: '#B95202',
          700: '#9B3C02',
          800: '#7D2A01',
          900: '#671D00',
        },
        danger: {
          100: '#FCE2D3',
          200: '#FABEA9',
          300: '#F2907C',
          400: '#E66659',
          500: '#D62828',
          600: '#B81D2A',
          700: '#9A142B',
          800: '#7C0C29',
          900: '#660728',
        },
        silver: {
          100: '#F2F4FC',
          200: '#E6E9F9',
          300: '#D3D7EF',
          400: '#BEC3DF',
          500: '#A3A8CA',
          600: '#777DAD',
          700: '#525891',
          800: '#333975',
          900: '#1F2460',
        },
      },
    },
  },
  corePlugins: {},
  plugins: [],
}
