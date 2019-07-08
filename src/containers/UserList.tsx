import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../reduxStores/general/store';
import { IUser } from '../reduxStores/general/reducers/userReducer';
import Grid from '@material-ui/core/Grid';

// Create the components interface
interface IProps {
  users: IUser[];
}

// React class-based component
class UserList extends React.Component<IProps> {
  public render() {
    const { users } = this.props;
    return (
      <div>
        <Grid container spacing={2}>
        {users &&
          users.map(user => {
            return (
              <Grid item xs={6} key={user.name}>
                <div className="name">
                  {user.name}<br/>
                  {user.username}<br/>
                  {user.phone}<br/>
                  {user.email}
                </div>
              </Grid>
            );
          })}
        </Grid>
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