export const primaryColor = '#e57373';
export const secondaryColor = '#4db6ac';
export const primaryFont = 'Open Sans';
export const emphasisFont = 'serif';
export const cursiveFont = 'cursive';
export const primaryTextColor = 'rgba(0,0,0,0.87)';
export const baseFontSize = 16;

export const theme = {
  themeName: 'default-light',
  colors: {
    primaryColor,
    secondaryColor,
    primaryTextColor,
    baseFontSize
  },
  globals: {
    primaryFont,
    emStyle: 'italic', // <em>
    strongWeight: 500, // <strong>
    smallSize: '75%', // <small>
    bgColor: '#efefef'
  },
  typography: {
    sizes: {
      // sizes in pixels
      extraSmall: 12,
      small: 14,
      medium: baseFontSize,
      large: 18
    },
    blockquote: {
      font: cursiveFont,
      color: '',
      background: '',
      border: ''
    },
    headings: {
      // TODO borders
      h1: {
        font: emphasisFont,
        size: '4.2rem',
        color: '',
        lineHeight: '110%'
      },
      h2: {
        font: emphasisFont,
        size: '3.56rem',
        color: '',
        lineHeight: '110%'
      },
      h3: {
        font: emphasisFont,
        size: '2.92rem',
        color: '',
        lineHeight: '110%'
      },
      h4: {
        font: emphasisFont,
        size: '2.28rem',
        color: '',
        lineHeight: '110%'
      },
      h5: {
        font: emphasisFont,
        size: '1.64rem',
        color: '',
        lineHeight: '110%'
      },
      h6: {
        font: emphasisFont,
        size: '1.15rem',
        color: '',
        lineHeight: '110%'
      }
    }
  }
};
