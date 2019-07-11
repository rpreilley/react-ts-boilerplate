import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import headerStyles from './bpHeaderStyles';
import { observer, inject } from 'mobx-react';

interface IGeneralStore {
  _openDialog(): void
  _openAppDrawer(): void
}

// Define interface for component props
interface HeaderProps {
  generalStore?: IGeneralStore
  title?: string
};

// React functional component
const BpHeader: React.FC<HeaderProps> = inject('generalStore')(observer((props) => {

  // Hook into headerStyles defined for component and set to a variable
  const classes = headerStyles();

  function openDialog() {
    props.generalStore!._openDialog()
  }

  function handleDrawerOpen(event: React.SyntheticEvent | React.MouseEvent, reason?: string) {
    props.generalStore!._openAppDrawer();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu" className={classes.menuButton} onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Button className={classes.button} onClick={openDialog}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}))

// Set default props
BpHeader.defaultProps = {
  title: 'Title'
}

export default BpHeader;