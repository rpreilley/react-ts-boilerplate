import { observable, action } from 'mobx';

export default class GeneralStore {
  @observable snackbarStatus: boolean;
  @observable snackbarMessage: string;

  constructor() {
    this.snackbarStatus = false;
    this.snackbarMessage = ''
  }

  @action
  _updateSnackbarStatus(data: {message: string}) {
    this.snackbarStatus = !this.snackbarStatus;
    if (data) {
      this.snackbarMessage = data.message
    }
  }

}

export const generalStore = new GeneralStore();