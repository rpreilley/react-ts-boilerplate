import { observable, action, toJS } from 'mobx';
import ApiService from '../services/ApiService';

export default class UserStore {
  @observable userId: Number;
  @observable firstName: string;
  @observable lastName: string;
  @observable userSession: Object;
  @observable emailAddress: string;
  @observable formValues: any

  constructor() {
    this.userId = null!;
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
    this.userSession = {};
    this.formValues = {};
  }

  @action
  _authenticateUser(data: Object) {
    // Url needed for authentication endpoint
    const url = '';

    // Map out data from authentication form being passed in to send to endpoint

    // Pass any additional options, like headers
    const options = {

    };

    ApiService.post(url, data, options)
      .then((response) => {
        // If successful response, set returned user values as store values
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      })
  }

  @action
  _clearUserSession() {
    this.userId = null!;
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
    this.userSession = {};
  }

  @action
  _updateFormValues(data: any) {
    this.formValues = {...this.formValues, ...data}
  }

  _getformValues() {
    let response = toJS(this.formValues);
    console.log(response);
    debugger
    return response
  }

  _clearformValues() {
    this.formValues = [];
  }

}

export const userStore = new UserStore();