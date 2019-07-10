import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import headerStyles from './headerStyles';
import { observer, inject } from 'mobx-react';

// React functional component
const Header: React.FC<HeaderProps> = inject('generalStore')(observer((props) => {
  const { title } = props;

  // Hook into headerStyles defined for component and set to a variable
  const classes = headerStyles();

  function openDialog() {
    props.generalStore!._openDialog()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button className={classes.button} onClick={openDialog}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}))

interface IGeneralStore {
  _openDialog(): void
}

// Define interface for component props
interface HeaderProps {
  generalStore?: IGeneralStore
  title?: string
};

// Set default props
Header.defaultProps = {
  title: 'Title'
}

export default Header;