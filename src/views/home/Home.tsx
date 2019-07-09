import React from 'react';
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';

interface IHome {
  userStore: { 
    _fetchUsers(): void 
    users: any
  }
}

@inject('userStore')
@observer
class Home extends React.Component<IHome> {
  static defaultProps = {
    userStore: {
      name: ''
    }
  }
  constructor(props:any) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <p>Home Component</p>
        <Button color="inherit" onClick={() => this.props.userStore._fetchUsers()}>Test</Button>
        <div>
          { this.props.userStore.users.map((value:{name?: string}, index:number) => {
            return <p key={index}>{value.name}</p>
          }) }
        </div>
      </div>
    )
  }

}


// Home component as functional component

// const Home: React.FC = () => {
//   return (
//     <div>
//       {/* <UserList /> */}
//       Hello
//     </div>
//   );
// }

export default Home;