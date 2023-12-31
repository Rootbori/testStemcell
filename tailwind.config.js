const cs = {
  'transparent': 'transparent',
  'current': 'currentColor',
  'black': '#000',
  'white': '#fff',
  'blueMain': '#1A94FF',
  'greenMain': '#43C241',
  'main': {
    '50': '#e6eef7',
    '100': '#c0d5ea',
    '200': '#96b9dc',
    '300': '#6b9dce',
    '400': '#4c88c4',
    '500': '#2c73b9',
    '600': '#276bb2',
    '700': '#2160aa',
    '800': '#1b56a2',
    '900': '#104393',
  },
  'red': {
    '50': '#feeceb',
    '100': '#fdd9d7',
    '200': '#fbb4af',
    '300': '#f88e86',
    '400': '#f6695e',
    '500': '#f44336',
    '600': '#dc3c31',
    '700': '#ab2f26',
    '800': '#621b16',
    '900': '#180705'
  },
  'pink': {
    '50': '#fde9ef',
    '100': '#fbd2e0',
    '200': '#f6a5c1',
    '300': '#f278a1',
    '400': '#ed4b82',
    '500': '#e91e63',
    '600': '#d21b59',
    '700': '#a31545',
    '800': '#5d0c28',
    '900': '#17030a'
  },
  'purple': {
    '50': '#f5e9f7',
    '100': '#ebd4ef',
    '200': '#d7a9df',
    '300': '#c47dd0',
    '400': '#b052c0',
    '500': '#9c27b0',
    '600': '#8c239e',
    '700': '#6d1b7b',
    '800': '#3e1046',
    '900': '#100412'
  },
  'blue': {
    '50': '#e9f5fe',
    '100': '#d3eafd',
    '200': '#a6d5fa',
    '300': '#7ac0f8',
    '400': '#4dabf5',
    '500': '#2196f3',
    '600': '#1e87db',
    '700': '#1769aa',
    '800': '#0d3c61',
    '900': '#030f18'
  },
  'sky': {
    '50': '#e7fafe',
    '100': '#cff4fc',
    '200': '#9eeaf9',
    '300': '#6edff6',
    '400': '#3dd5f3',
    '500': '#0dcaf0',
    '600': '#0aa2c0',
    '700': '#087990',
    '800': '#055160',
    '900': '#032830'
  },
  'green': {
    '50': '#edf7ee',
    '100': '#dbefdc',
    '200': '#b7dfb9',
    '300': '#94cf96',
    '400': '#70bf73',
    '500': '#4caf50',
    '600': '#449e48',
    '700': '#357b38',
    '800': '#1e4620',
    '900': '#081208'
  },
  'yellow': {
    '50': '#fffdeb',
    '100': '#fffbd8',
    '200': '#fff7b1',
    '300': '#fff389',
    '400': '#ffef62',
    '500': '#ffeb3b',
    '600': '#e6d435',
    '700': '#b3a529',
    '800': '#665e18',
    '900': '#1a1806'
  },
  'orange': {
    '50': '#fff5e6',
    '100': '#ffeacc',
    '200': '#ffd699',
    '300': '#ffc166',
    '400': '#ffad33',
    '500': '#ff9800',
    '600': '#e68900',
    '700': '#b36a00',
    '800': '#663d00',
    '900': '#1a0f00'
  },
  'brown': {
    '50': '#f2eeed',
    '100': '#e4ddda',
    '200': '#c9bbb6',
    '300': '#af9991',
    '400': '#94776d',
    '500': '#795548',
    '600': '#6d4d41',
    '700': '#553c32',
    '800': '#30221d',
    '900': '#0c0907'
  },
  'grey': {
    '50': '#f5f5f5',
    '100': '#ececec',
    '200': '#d8d8d8',
    '300': '#c5c5c5',
    '400': '#b1b1b1',
    '500': '#9e9e9e',
    '600': '#8e8e8e',
    '700': '#6f6f6f',
    '800': '#3f3f3f',
    '900': '#101010'
  },
  'grey-blue': {
    '50': '#eff2f3',
    '100': '#dfe5e8',
    '200': '#bfcbd1',
    '300': '#a0b1b9',
    '400': '#8097a2',
    '500': '#607d8b',
    '600': '#56717d',
    '700': '#435861',
    '800': '#263238',
    '900': '#0a0d0e'
  }
}

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: cs,
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.grey.200', 'currentColor'),
    }),
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'active'],
    extend: {},
  },
  plugins: [],
}
