import { observable, action } from 'mobx';
import {
  anchorOriginHorizontalEnum,
  anchorOriginVerticalEnum,
  variantIcon,
  widthEnum
} from '../lib/enums/generalEnums';

// Snackbar interface
export interface ISnackbar {
  snackbarMessage?: string
  snackbarTimeout?: number
  snackbarVariant?: keyof typeof variantIcon;
  snackbarAnchorOrigin?: {
    horizontal?: anchorOriginHorizontalEnum,
    vertical?: anchorOriginVerticalEnum
  }
}

interface IDialogButton {
  label: string,
  callback?(): void
}

export interface IDialog {
  dialogStatus?: boolean;
  dialogTitle?: string;
  dialogShowCloseButton?: boolean;
  dialogCloseButtonLabel?: string;
  dialogChildren?: any;
  dialogButtons?: IDialogButton[];
  dialogMaxWidth?: widthEnum;
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
  @observable dialogTitle: string;
  @observable dialogShowCloseButton: boolean;
  @observable dialogCloseButtonLabel: string;
  @observable dialogChildren: any;
  @observable dialogButtons: IDialogButton[];
  @observable dialogMaxWidth: widthEnum;

  // AppDrawer Observables
  @observable appDrawerStatus?: boolean;
  @observable appDrawerMiniVariantOption?: boolean;

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
    this.dialogTitle = 'Dialog Title';
    this.dialogShowCloseButton = true;
    this.dialogCloseButtonLabel = '';
    this.dialogChildren = '';
    this.dialogButtons = [];
    this.dialogMaxWidth = widthEnum.SM

    // AppDrawer defaults
    this.appDrawerStatus = false;
    this.appDrawerMiniVariantOption = false;
  }

  // Snackbar actions
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

  //Dialog actions
  @action
  _updateDialogStatus(data: IDialog) {
    this.dialogStatus = !this.dialogStatus;
    this.dialogTitle = data.dialogTitle ? data.dialogTitle : 'Default Title';
    this.dialogShowCloseButton = data.dialogShowCloseButton ? data.dialogShowCloseButton : true;
    this.dialogCloseButtonLabel = data.dialogCloseButtonLabel ? data.dialogCloseButtonLabel : '';
    this.dialogChildren = data.dialogChildren ? data.dialogChildren : '';
    this.dialogButtons = data.dialogButtons ? data.dialogButtons : [];
    this.dialogMaxWidth = data.dialogMaxWidth ? data.dialogMaxWidth : widthEnum.SM;
  }

  @action
  _openDialog() {
    this.dialogStatus = true;
  }

  @action
  _closeDialog() {
    this.dialogStatus = false;
  }

  // AppDrawer actions
  @action
  _openAppDrawer() {
    this.appDrawerStatus = true;
  }

  @action
  _closeAppDrawer() {
    this.appDrawerStatus = false;
  }

  @action
  _toggleAppDrawer() {
    this.appDrawerStatus = !this.appDrawerStatus

    if (this.appDrawerMiniVariantOption) {
      this.appDrawerMiniVariantOption = false;
    }
  }

  @action
  _toggleAppDrawerMiniVariantOption() {
    this.appDrawerMiniVariantOption = !this.appDrawerMiniVariantOption;
  }

}

export const generalStore = new GeneralStore();