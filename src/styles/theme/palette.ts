import styles from '../globalStyles.scss';

export default {
  primary: {
    main: styles.primary
  },
  secondary: {
    main: styles.secondary
  },
  error: {
    main: styles.error
  },
  common: {
    black: styles.black,
    white: styles.white
  },
  success: {
    contrastText: styles.white,
    main: '#45B880',
    light: '#F1FAF5',
    dark: '#00783E'
  },
  info: {
    contrastText: styles.white,
    main: '#1070CA',
    light: '#F1FBFC',
    dark: '#007489'
  },
  warning: {
    contrastText: styles.white,
    main: '#FFB822',
    light: '#FDF8F3',
    dark: '#95591E'
  },
  danger: {
    contrastText: styles.white,
    main: '#ED4740',
    light: '#FEF6F6',
    dark: '#BF0E08'
  },
  text: {
    primary: '#12161B',
    secondary: '#66788A',
    disabled: '#A6B1BB'
  },
  background: {
    default: '#f8fafc',
    dark: '#172B4D',
    paper: styles.white
  },
  border: '#DFE3E8',
  divider: '#DFE3E8'
};