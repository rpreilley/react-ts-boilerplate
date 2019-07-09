import { observable, action } from 'mobx';

export default class GeneralStore {
  @observable snackbarStatus : boolean;

  constructor() {
    this.snackbarStatus = false;
  }

  @action
  _updateSnackbarStatus() {
    this.snackbarStatus = !this.snackbarStatus;
  }

}

export const generalStore = new GeneralStore();