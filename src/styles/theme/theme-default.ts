import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import styles from '../globalStyles.scss';

const themeDefault = createMuiTheme({
  palette: palette,
});

const theme = {
  ...themeDefault,
  themeCustom: {
    success: {
      main: styles.success
    }
  }
}

export default theme;