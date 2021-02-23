module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        90: '5.625rem',
        60: '3.75rem',
        50: '3.125rem',
        28: '1.75rem',
        32: '2rem'
      },
      height: {
        75: '18.75rem'
      },
      width: {},
      minWidth: {},
      margin: {},
      borderRadius: {
        '24': '1.5rem'
      },
      body: ['"TypoGrotesk"'],
      display: ['TypoGrotesk'],
      fontFamily: {
        typoGrotesk: 'TypoGrotesk'
      },
      borderRadius: {
        '22': '22px'
      },
      colors: {
        purple1: '#6948B7',
        purple2: '#5230A2',
        gray1: '#F9F8FB',
        gray2: '#200A52',
        gray3: '#898A8D',
        gray4: '#4F5154',
        gray5: '#181A1D',
        gray6: '#254254',
        gray7: '#A7B4C0',
        gray8: '#393B3F',
        gray9: '#232529',
        green: '#34D399',
        lightgreen: '#44e0b7'
      },
      zIndex: {
        '-1': '-1',
        '999': '999'
      }
    },
    screens: {
      'max-3xl': { max: '1920px' },
      // => @media (max-width: 1920px) { ... }

      'max-2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      'max-xl': { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      'max-lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      'max-md': { max: '767px' },
      // => @media (max-width: 767px) { ... }

      'max-sm': { max: '639px' }
      // => @media (max-width: 639px) { ... }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
