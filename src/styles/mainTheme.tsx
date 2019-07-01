import * as styles from './globalStyles.scss';

// Main Theme styles are now directly linked to global scss variables via sass :export directive

const mainTheme = {
  primary: styles.primary,
  secondary: styles.secondary,
  accent: styles.accent,
  error: styles.error,
  info: styles.info,
  success: styles.success,
  warning: styles.warning
}

export default mainTheme;