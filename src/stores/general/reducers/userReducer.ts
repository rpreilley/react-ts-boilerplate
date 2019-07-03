// Reducers specify how the applications state changes in response to actions sent to the store

// Import Reducer type

import { Reducer } from 'redux';
import {
  UserActions,
  UserActionTypes,
} from '../actions/userActions';

// Define the User type
export interface IUser {
  name: string;
  username: string;
  phone: string;
  email: string;
}

// Define the state
export interface IUserState {
  readonly users: IUser[];
}

// Define the initial state
const initialUserState: IUserState = {
  users: [],
};

export const UserReducer: Reducer<IUserState, UserActions> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.GET_ALL: {
      return {
        ...state,
        users: action.users,
      };
    }
    default:
      return state;
  }
};