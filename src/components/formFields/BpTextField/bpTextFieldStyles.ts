import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: theme.palette.common.white
    }
  })
);

export default headerStyles;