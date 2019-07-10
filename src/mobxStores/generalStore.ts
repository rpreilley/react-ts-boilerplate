import { observable, action } from 'mobx';
import {anchorOriginHorizontalEnum, anchorOriginVerticalEnum } from '../lib/enums/snackbarEnum';
import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

interface ISnackbar {
  snackbarMessage?: string
  snackbarTimeout?: number
  snackbarVariant?: keyof typeof variantIcon;
  snackbarAnchorOrigin?: {
    horizontal?: anchorOriginHorizontalEnum,
    vertical?: anchorOriginVerticalEnum
  }
}

export default class GeneralStore {
  @observable snackbarStatus?: boolean;
  @observable snackbarMessage?: string;
  @observable snackbarTimeout?: number;
  @observable snackbarVariant?: keyof typeof variantIcon;
  @observable snackbarAnchorOrigin?: {
    horizontal?: anchorOriginHorizontalEnum,
    vertical?: anchorOriginVerticalEnum
  }

  constructor() {
    this.snackbarStatus = false;
    this.snackbarMessage = '';
    this.snackbarTimeout = 3000;
    this.snackbarVariant = 'info';
    this.snackbarAnchorOrigin = {
      horizontal: anchorOriginHorizontalEnum.CENTER,
      vertical: anchorOriginVerticalEnum.TOP
    };
  }

  @action
  _updateSnackbarStatus(data: ISnackbar) {
    // Set snackbar status to opposite of what it is currently set to
    this.snackbarStatus = !this.snackbarStatus;

    // If data is detected, check e
    if (data) {
      this.snackbarMessage = data.snackbarMessage ? data.snackbarMessage : ''
      this.snackbarTimeout = data.snackbarTimeout ? data.snackbarTimeout : 3000
      this.snackbarAnchorOrigin = data.snackbarAnchorOrigin ? data.snackbarAnchorOrigin : this.snackbarAnchorOrigin
      this.snackbarVariant = data.snackbarVariant ? data.snackbarVariant : this.snackbarVariant
    }
  }

}

// Example way to call the snackbar and pass data
// triggerSnackbar = (data: {
//   snackbarTimeout?: number
//   snackbarMessage?: string
//   snackbarAnchorOrigin?: {
//     horizontal?: anchorOriginHorizontalEnum
//     vertical?: anchorOriginVerticalEnum
//   }
// }) => {
//   this.props.generalStore._updateSnackbarStatus(data);
// }

export const generalStore = new GeneralStore();