import React from 'react';
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import BpTextField from '../../components/formFields/BpTextField/BpTextField';
import BpDatePicker from '../../components/formFields/BpDatePicker/BpDatePicker';
import BpSnackbar from '../../components/formFields/BpSnackbar/BpSnackbar';

interface IHome {
  userStore: { 
    _fetchUsers(): void 
    users: any
  },
  generalStore: {
    _updateSnackbarStatus(): void
    snackbarStatus: boolean
  }
}

interface IState {
  snackbarOpen: boolean
}

@inject('userStore', 'generalStore')
@observer
class Home extends React.Component<IHome, IState> {

  static defaultProps = {
    userStore: {
      name: ''
    },
    generalStore: {
      snackbarStatus: false
    }
  }

  constructor(props:any) {
    super(props);

    let snackbarStatus = props.generalStore.snackbarStatus;
    this.state = {
      snackbarOpen: snackbarStatus
    }
  }

  // Handle on close function of the global snackbar
  handleClick = () => {
    this.setState({
      snackbarOpen: !this.state.snackbarOpen
    })
  } 

  render() {
    return(
      <div className="">
        <p>Home Component</p>
        <BpSnackbar open={this.state.snackbarOpen} onClose={this.handleClick}/>
        <Button color="inherit" onClick={this.handleClick}>Test snackbar</Button>
      </div>
    )
  }

}

export default Home;