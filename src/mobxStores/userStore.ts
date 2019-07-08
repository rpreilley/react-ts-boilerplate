import { observable, action } from 'mobx';
import axios from 'axios';

export default class UserStore {
  @observable users: Array<object>;
  @observable initialName: string;

  constructor() {
    this.users = [];
    this.initialName = "Testing here";
  }

  @action
  loadUsers(data: Array<object>) {
    let users: Array<object> = [];
    data.forEach(function(d) {
      users.push(d);
    })

    this.users = users;
  }

  @action
  async _fetchUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.loadUsers(response.data)
    } catch (err) {
      console.error(err);
    }
  }

}

export const userStore = new UserStore();