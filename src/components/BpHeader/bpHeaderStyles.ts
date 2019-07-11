import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: theme.palette.common.white
    },
    title: {
      flexGrow: 1,
      color: theme.palette.common.white
    },
    button: {
      color: theme.palette.common.white
    }
  })
);

export default headerStyles;