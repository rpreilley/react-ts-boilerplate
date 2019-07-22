import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;
const drawerWidthWithMiniVariantOption = 58;

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
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      boxShadow: 'none'
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    },
    appBarShiftWithMiniVariantOption: {
      marginLeft: drawerWidthWithMiniVariantOption,
      width: `calc(100% - ${drawerWidthWithMiniVariantOption}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    },
  })
);

export default headerStyles;