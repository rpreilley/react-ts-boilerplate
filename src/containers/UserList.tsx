import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../stores/general/store';

import { IUser } from '../stores/general/reducers/userReducer';

// Create the containers interface
interface IProps {
  users: IUser[];
}

class UserList extends React.Component<IProps> {
  public render() {
    const { users } = this.props;
    return (
      <div className="name-container">
        {users &&
          users.map(user => {
            return (
              <div key={user.name} className="name">
                {user.name}<br/>
                {user.username}<br/>
                {user.phone}<br/>
                {user.email}
              </div>
            );
          })}
      </div>
    );
  }
}

// Grab the users from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    users: store.userState.users,
  };
};

export default connect(mapStateToProps)(UserList);