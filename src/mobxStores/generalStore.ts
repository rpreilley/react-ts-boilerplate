import { observable, action } from 'mobx';
import {anchorOriginHorizontalEnum, anchorOriginVerticalEnum, variantIcon } from '../lib/enums/snackbarEnum';

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
  // Snackbar Observables
  @observable snackbarStatus?: boolean;
  @observable snackbarMessage?: string;
  @observable snackbarTimeout?: number;
  @observable snackbarVariant?: keyof typeof variantIcon;
  @observable snackbarAnchorOrigin?: {
    horizontal?: anchorOriginHorizontalEnum,
    vertical?: anchorOriginVerticalEnum
  }
  // Dialog Observables
  @observable dialogStatus?: boolean;

  constructor() {
    // Snackbar defaults
    this.snackbarStatus = false;
    this.snackbarMessage = 'Default message';
    this.snackbarTimeout = 3000;
    this.snackbarVariant = 'info';
    this.snackbarAnchorOrigin = {
      horizontal: anchorOriginHorizontalEnum.CENTER,
      vertical: anchorOriginVerticalEnum.TOP
    };
    // Dialog defaults
    this.dialogStatus = false;
  }

  @action
  _updateSnackbarStatus(data: ISnackbar) {
    // Set snackbar status to opposite of what it is currently set to
    this.snackbarStatus = !this.snackbarStatus;
    this.snackbarMessage = data.snackbarMessage ? data.snackbarMessage : 'Default message'
    this.snackbarTimeout = data.snackbarTimeout ? data.snackbarTimeout : 3000
    this.snackbarAnchorOrigin = data.snackbarAnchorOrigin ? data.snackbarAnchorOrigin : {
      horizontal: anchorOriginHorizontalEnum.CENTER,
      vertical: anchorOriginVerticalEnum.TOP
    }
    this.snackbarVariant = data.snackbarVariant ? data.snackbarVariant : 'info'
  }

  @action
  _closeSnackbar() {
    this.snackbarStatus = false;
  }

  @action
  _openDialog() {
    this.dialogStatus = true;
  }

  @action
  _closeDialog() {
    this.dialogStatus = false;
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