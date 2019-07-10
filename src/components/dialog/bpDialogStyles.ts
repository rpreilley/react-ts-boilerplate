import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogContent: {
      textAlign: 'center'
    }
  })
);

export default headerStyles;