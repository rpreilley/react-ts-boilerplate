import React from 'react'
import { observer, inject } from 'mobx-react';
import bpAppDrawerStyles from './bpAppDrawerStyles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useTheme } from '@material-ui/core/styles';
import { routes } from "../../router/Routes";
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Tooltip from '@material-ui/core/Tooltip';

interface IGeneralStore {
  appDrawerStatus: boolean
  _closeAppDrawer(): void
}

interface BpAppDrawerProps {
  generalStore?: IGeneralStore
  open?: boolean
}

const BpAppDrawer: React.FC<BpAppDrawerProps> = inject('generalStore')(observer((props) => {
  const classes = bpAppDrawerStyles();
  const theme = useTheme();

  function handleDrawerClose(event: React.SyntheticEvent | React.MouseEvent, reason?: string) {
    props.generalStore!._closeAppDrawer();
  }

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        open={props.generalStore!.appDrawerStatus}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.generalStore!.appDrawerStatus,
          [classes.drawerClose]: !props.generalStore!.appDrawerStatus,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.generalStore!.appDrawerStatus,
            [classes.drawerClose]: !props.generalStore!.appDrawerStatus,
          }),
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((route, index) => (
            <Link to={route.path} className={classes.list} key={index}>
              <Tooltip title={route.name} placement='right'>
                <ListItem button key={route.name}>
                  { 
                    route.icon && 
                    <ListItemIcon>
                      { React.createElement(route.icon) }
                    </ListItemIcon> 
                  }
                  <ListItemText primary={route.name} />
                </ListItem>  
              </Tooltip>            
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <Tooltip title={text} key={index} placement='right'>
              <ListItem button>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Drawer>
    </div>
  );
}))

export default BpAppDrawer;