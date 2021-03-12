module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        2.25: '0.5625rem',
        28: '1.75rem',
        32: '2rem',
        37: '37px',
        50: '3.125rem',
        60: '3.75rem',
        90: '5.625rem',
        207: '207px'
      },
      height: {
        50: '3.125rem',
        75: '18.75rem'
      },
      width: {
        47.5: '11.875rem',
        84: '21rem',
        102: '25.5rem'        
      },
      minWidth: {
        '120': '30rem',
        '84': '21rem',
        '64': '16rem'
      },
      maxWidth: {
        '8xl': '120rem'
      },   
      minHeight: {
        '100vh': '100vh'
      },  
      margin: {
        'initial': 'initial'
      },
      marginBottom: {
        26: '6.5rem'
      },
      body: ['"TypoGrotesk"'],
      display: ['TypoGrotesk'],
      fontFamily: {
        typoGrotesk: 'TypoGrotesk'
      },
      letterSpacing: {
        moretight: '-.035em',
      },
      borderRadius: {
        '24': '1.5rem',
        '22': '1.375rem'
      },
      opacity: {
        '16': '.16'
      },
      transitionProperty: {
        'right': 'right'
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
        gray10: '#65676A',
        gray11: '#BDBEBF',
        gray12: '#D3D3D4',
<<<<<<< HEAD
        gray13: '#FBFAFC',
=======
        gray13: '#fbfafc',
>>>>>>> 831a9df347b44189d543b5c00b79cfaac2e9d9f8
        lightgray1: '#F4F4F4',
        green: '#34D399',
        lightgreen: '#44e0b7'
      },
      zIndex: {
        '-1': '-1',
        '999': '999',
        '9999': '9999'
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

      'max-sm': { max: '639px' },
      // => @media (max-width: 639px) { ... }



      'min-3xl': { min: '1920px' },
      // => @media (min-width: 1920px) { ... }

      'min-2xl': { min: '1535px' },
      // => @media (min-width: 1535px) { ... }

      'min-xl': { min: '1279px' },
      // => @media (min-width: 1279px) { ... }

      'min-lg': { min: '1023px' },
      // => @media (min-width: 1023px) { ... }

      'min-md': { min: '767px' },
      // => @media (min-width: 767px) { ... }

      'min-sm': { min: '639px' }
      // => @media (min-width: 639px) { ... }
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    }
  },
  plugins: []
}
