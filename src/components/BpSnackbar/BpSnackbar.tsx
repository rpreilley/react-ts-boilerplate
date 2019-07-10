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
import {anchorOriginHorizontalEnum, anchorOriginVerticalEnum } from '../../lib/enums/snackbarEnum';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const BpSnackbar: React.FC<BpSnackbarProps> = inject('generalStore')(observer((props) => {
  const classes = bpSnackbarStyles();

  const Icon = variantIcon[props.generalStore!.snackbarVariant];

  function handleClose(event: React.SyntheticEvent | React.MouseEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    props.generalStore!._updateSnackbarStatus();
  }

  return (
    <Snackbar
      anchorOrigin={props.generalStore!.snackbarAnchorOrigin}
      open={props.generalStore!.snackbarStatus}
      autoHideDuration={props.generalStore!.snackbarTimeout}
      onClose={handleClose}
    >
    <SnackbarContent
      className={clsx(classes[props.generalStore!.snackbarVariant])}
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          { props.generalStore!.snackbarMessage }
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

interface IGeneralStore {
  snackbarStatus: boolean
  snackbarMessage: string
  snackbarTimeout: number
  snackbarVariant: keyof typeof variantIcon
  snackbarAnchorOrigin: {
    horizontal: anchorOriginHorizontalEnum
    vertical: anchorOriginVerticalEnum
  }
  _updateSnackbarStatus(): void
}

interface BpSnackbarProps {
  generalStore?: IGeneralStore
  open: boolean
  transitionDuration?: (number | {enter?: number, exit?: number})
}

BpSnackbar.defaultProps = {
  transitionDuration: 500,
}

export default BpSnackbar;