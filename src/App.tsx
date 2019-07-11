import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';
import Container from '@material-ui/core/Container';
import theme from './styles/theme/theme-default';
import Header from './components/BpHeader/BpHeader';
import Home from './views/home/Home';
import { observer, inject } from 'mobx-react';
import BpSnackbar from './components/BpSnackbar/BpSnackbar';
import {anchorOriginHorizontalEnum, anchorOriginVerticalEnum } from './lib/enums/snackbarEnum';
import BpDialog from './components/BpDialog/BpDialog';
import BpAppDrawer from './components/BpAppDrawer/BpAppDrawer';

interface IApp {
  userStore: {
    _fetchUsers(): void
    users: any
  },
  generalStore: {
    _updateSnackbarStatus(data: {
      snackbarTimeout?: number,
      snackbarMessage?: string,
      snackbarAnchorOrigin?: {
        horizontal?: anchorOriginHorizontalEnum,
        vertical?: anchorOriginVerticalEnum
      } 
    }): void
    snackbarStatus: boolean
  }
}

interface IAppState {
  snackbarOpen: boolean
}

let buttons = [
  {
    label: "Submit",
    callback: () => {
      console.log("Hitting the submit button callback function");
    }
  }
]

@inject('userStore', 'generalStore')
@observer
class App extends React.Component<IApp, IAppState> {

  static defaultProps = {
    userStore: {
      name: ''
    },
    generalStore: {
      snackbarStatus: false
    }
  }

  constructor(props: any) {
    super(props);

    let snackbarStatus = props.generalStore.snackbarStatus;
    this.state = {
      snackbarOpen: snackbarStatus
    }
  }

  // Handle on close function of the global snackbar
  triggerSnackbar = (data: {
    snackbarTimeout?: number
    snackbarMessage?: string
    snackbarAnchorOrigin?: {
      horizontal?: anchorOriginHorizontalEnum
      vertical?: anchorOriginVerticalEnum
    }
    snackbarVarient?: string
  }) => {
    this.props.generalStore._updateSnackbarStatus(data);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <BpAppDrawer />
        <BpSnackbar open={this.props.generalStore.snackbarStatus} />
        <BpDialog
          title="Dialog title"
          showCloseButton={true}
          closeButtonLabel="close"
          buttons={buttons}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dolor ac felis mattis ornare non id elit. Aenean mattis lorem elit, eget consectetur mi gravida non. Nulla gravida est neque, ac tempus ipsum tempus quis. Pellentesque at mauris imperdiet, cursus dolor ut, laoreet lacus.
          </div>
        </BpDialog>
        <Container maxWidth="lg" className="app-container">
          <Home />
        </Container>
      </ThemeProvider>
    )
  }

}

export default App;