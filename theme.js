// example base theme from @theme-ui/presets
export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    heading: 'inherit',
    body: 'Inter',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  useLocalStorage: false,
  colors: {
    text: '#000',
    gray: '#718096',
    white: '#fff',
    offWhite: '#f7fafc',
    primary: '#000',
    lightGreen: '#f0fff4',
    lightBlue: '#ebf8ff',
    background: '#fff',
    lightGray: '#edf2f7',
    modes: {
      light: {
        text: '#000',
        background: '#fff',
        lightGray: '#edf2f7',
      },
    },
  },
  buttons: {
    primary: {
      px: 2,
      py: 1,
      color: 'text',
      border: 'solid',
      borderWidth: 1,
      bg: 'transparent',
      fontSize: 13,
      cursor: 'pointer',
      '&:hover': {
        bg: 'lightGray',
      },
    },
    tiny: {
      px: 2,
      py: 1,
      color: 'text',
      border: 'solid 1px lightGray',
      borderWidth: 1,
      bg: 'transparent',
      fontSize: 13,
      cursor: 'pointer',
      '&:hover': {
        bg: 'lightGray',
      },
    },
    shadowButton: {
      border: 'dotted 1px lightGray',
      borderRadius: 12,
      bg: 'white',
      color: 'text',
      fontSize: 13,
      cursor: 'pointer',
      py: 2,
      boxShadow: '0 0 4px rgba(0, 0, 0, 0.125)',
      '&:hover': {
        boxShadow: '0 0 16px rgba(0, 0, 0, 0.125)',
      },
    },
    icon: {
      cursor: 'pointer',
      '&:hover': {
        bg: 'lightGray',
      },
    },
    iconselected: {
      cursor: 'pointer',
      bg: 'lightGray',
    },
  },
  links: {
    primary: {
      color: 'black',
    },
    nav: {
      fontWeight: 'bold',
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  badges: {
    outline: {
      fontFamily: 'mononiki',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },
  cards: {
    aboutCard: {
      px: 3,
      bg: 'transparent',
      borderRadius: 12,
      border: '1px solid black',
      fontFamily: 'mononiki',
    },
  },
  images: {
    profile: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  forms: {
    checkbox: {
      color: 'black',
    },
    label: {
      fontSize: '12px',
      fontFamily: 'mono',
      color: 'text',
    },
  },
  text: {
    tiny: {
      fontSize: '11px',
    },
    small: {
      fontSize: '13px',
    },
    large: {
      fontSize: '14px',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    a: {
      color: '#4299e1',
    },
    progress: {
      color: 'text',
      bg: 'lightGray',
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'mono',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'mono',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};
