// Redux actions are payloads of information that send data from your applicatoin to your store
// They are the ONLY source of information for the store

// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Character Typing
import { IUser, IUserState } from '../reducers/userReducer';

// Create Action Constants
export enum UserActionTypes {
  GET_ALL = 'GET_ALL',
}

// Interface for Get All Action Type
export interface IUserGetAllAction {
  type: UserActionTypes.GET_ALL;
  users: IUser[];
}

/* 
Combine the action types with a union (we assume there are more)
example: export type UserActions = IGetAllAction | IGetOneAction ... 
*/
export type UserActions = IUserGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllUsers: ActionCreator<
  ThunkAction<Promise<any>, IUserState, null, IUserGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response.data)
      dispatch({
        users: response.data,
        type: UserActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};