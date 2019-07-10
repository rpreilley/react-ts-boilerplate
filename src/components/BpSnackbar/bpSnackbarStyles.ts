import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5)
    },
    success: {
      backgroundColor: theme.customPalette.success.main
    },
    error: {
      backgroundColor: theme.palette.error.main
    },
    info: {
      backgroundColor: theme.customPalette.info.main
    },
    warning: {
      backgroundColor: theme.customPalette.warning.main
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  })
);

export default headerStyles;