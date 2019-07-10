import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import styles from '../globalStyles.scss';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    customPalette: {
      success: {
        main: string,
      },
      info: {
        main: string
      },
      warning: {
        main: string
      }
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customPalette?: {
      success?: {
        main: string
      },
      info: {
        main: string
      },
      warning: {
        main: string
      }
    };
  }
}

const customPalette = {
  success: {
    main: styles.success
  },
  info: {
    main: styles.info
  },
  warning: {
    main: styles.warning
  }
}

const themeDefault = createMuiTheme({
  palette,
  customPalette
});


export default themeDefault;