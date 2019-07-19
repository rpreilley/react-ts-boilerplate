import { observable, action } from 'mobx';

export default class UserStore {
  @observable userId: Number;
  @observable firstName: string;
  @observable lastName: string;
  @observable userSession: Object;
  @observable emailAddress: string;

  constructor() {
    this.userId = null!;
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
    this.userSession = {};
  }

  @action
  authenticateUser(data: Object) {

  }

}

export const userStore = new UserStore();