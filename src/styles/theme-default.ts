import { createMuiTheme } from '@material-ui/core/styles';
import styles from './globalStyles.scss';

console.log(styles);

const themeDefault = createMuiTheme({
  palette: {
    primary: {
        main: styles.primary
    },
    secondary: {
        main: styles.secondary
    },
    error: {
        main: styles.error
    },
  },
});


export default themeDefault;