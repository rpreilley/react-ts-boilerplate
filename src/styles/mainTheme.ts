import styles from './globalStyles.scss'
import { createMuiTheme } from "@material-ui/core";

// Main Theme styles are now directly linked to global scss variables via sass :export directive

const mainTheme = createMuiTheme({
  primary: styles.primary,
  secondary: styles.secondary,
  accent: styles.accent,
  error: styles.error,
  info: styles.info,
  success: styles.success,
  warning: styles.warning,
  title: styles.title
});

export default mainTheme;