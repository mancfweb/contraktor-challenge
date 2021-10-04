import {createMuiTheme} from '@material-ui/core';

const textPrimary = '#28282F';
const secondaryPrimary = '#3F4048';

export const defaultMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1692D8',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#9BA6BE',
      contrastText: '#28292F',
    },
    background: {
      paper: '#FFF',
      default: '#28292F',
    },
    text: {
      primary: textPrimary,
      secondary: secondaryPrimary,
    },
  },
  typography: {
    h1: {
      color: textPrimary,
      fontWeight: 500,
      fontSize: '35px',
      letterSpacing: '-0.24px',
      lineHeight: '40px',
    },
    h2: {
      color: textPrimary,
      fontWeight: 500,
      fontSize: '29px',
      letterSpacing: '-0.24px',
      lineHeight: '32px',
    },
    h3: {
      color: textPrimary,
      fontWeight: 500,
      fontSize: '24px',
      letterSpacing: '-0.06px',
      lineHeight: '28px',
    },
    h4: {
      color: textPrimary,
      fontWeight: 500,
      fontSize: '20px',
      letterSpacing: '-0.06px',
      lineHeight: '24px',
    },
    h5: {
      color: textPrimary,
      fontWeight: 500,
      fontSize: '16px',
      letterSpacing: '-0.05px',
      lineHeight: '20px',
    },
    h6: {
      color: textPrimary,
      fontWeight: 500,
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '20px',
    },
    subtitle1: {
      color: textPrimary,
      fontSize: '16px',
      letterSpacing: '-0.05px',
      lineHeight: '25px',
    },
    subtitle2: {
      color: secondaryPrimary,
      fontWeight: 400,
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '21px',
    },
    body1: {
      color: textPrimary,
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '21px',
    },
    body2: {
      color: secondaryPrimary,
      fontSize: '12px',
      letterSpacing: '-0.04px',
      lineHeight: '18px',
    },
    button: {
      color: textPrimary,
      fontSize: '14px',
    },
    caption: {
      color: secondaryPrimary,
      fontSize: '11px',
      letterSpacing: '0.33px',
      lineHeight: '13px',
    },
    overline: {
      color: secondaryPrimary,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.33px',
      lineHeight: '13px',
      textTransform: 'uppercase',
    },
  },
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow:
          '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)',
      },
    },
    MuiButton: {
      contained: {
        boxShadow:
          '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
        backgroundColor: '#FFFFFF',
      },
    },
    MuiIconButton: {
      root: {
        color: '#9BA6BE',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.03)',
        },
      },
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});
