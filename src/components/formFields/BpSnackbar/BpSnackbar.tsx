import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import bpSnackbarStyles from './bpSnackbarStyles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import clsx from 'clsx';
import { observer, inject } from 'mobx-react';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

export interface Props {
  className?: string;
  message?: string;
  onClose?: () => void;
  variant: keyof typeof variantIcon;
}

const BpSnackbar: React.FC<BpSnackbarProps> = inject('generalStore')(observer((props) => {
  const classes = bpSnackbarStyles();

  const Icon = variantIcon[props.variant!];

  function handleClose(event: React.SyntheticEvent | React.MouseEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    props.onClose()
  }

  return (
    <Snackbar
      anchorOrigin={props.anchorOrigin}
      open={props.open}
      autoHideDuration={props.autoHideDuration}
      onClose={handleClose}
    >
    <SnackbarContent
      className={clsx(classes[props.variant!])}
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          { props.message }
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
      </Snackbar>
  );
}))

enum anchorOriginHorizontalEnum {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

enum anchorOriginVerticalEnum {
  TOP = 'top',
  BOTTOM = 'bottom'
}

interface BpSnackbarProps {
  anchorOrigin?: {
    horizontal: anchorOriginHorizontalEnum, 
    vertical: anchorOriginVerticalEnum
  }
  autoHideDuration?: number
  message?: string
  onClose: Function
  open: boolean
  transitionDuration?: (number | {enter?: number, exit?: number})
  variant?: keyof typeof variantIcon
}

BpSnackbar.defaultProps = {
  anchorOrigin: {
    horizontal: anchorOriginHorizontalEnum.CENTER, 
    vertical: anchorOriginVerticalEnum.TOP
  },
  autoHideDuration: 3000,
  message: 'Snackbar message',
  open: false,
  transitionDuration: 500,
  variant: 'success'
}

export default BpSnackbar;