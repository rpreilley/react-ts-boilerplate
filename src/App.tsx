import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';
import Container from '@material-ui/core/Container';
import theme from './styles/theme/theme-default';
import Header from './components/header/Header';
import Home from './views/home/Home';
import { observer, inject } from 'mobx-react';
import BpSnackbar from './components/BpSnackbar/BpSnackbar';
import {anchorOriginHorizontalEnum, anchorOriginVerticalEnum } from './lib/enums/snackbarEnum';
import BpDialog from './components/dialog/BpDialog'
import BpTextfield from "./components/formFields/BpTextField/BpTextField"

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
    callback: () => console.log("wazzam")
  },
  {
    label: "Submit pt. 2",
    callback: () => console.log("boi")
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

  // componentDidMount() {
  //   let data = {
  //     snackbarMessage: 'Hello, World',
  //     snackbarAnchorOrigin: {
  //       horizontal: anchorOriginHorizontalEnum.CENTER,
  //       vertical: anchorOriginVerticalEnum.TOP
  //     },
  //     snackbarVariant: 'success'
  //   }

  //   this.triggerSnackbar(data);
  // }

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

  testFunction () {
    console.log("INFO")
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <BpSnackbar open={this.props.generalStore.snackbarStatus} />
        <BpDialog
          title="This is a title"
          showCloseButton={true}
          closeButtonLabel="close"
          buttons={buttons}
        >
          <div style={{ width: '100%'}}>
            To subscribe to this website, please enter your email address here. We will send updates
          </div>
          <BpTextfield />
        </BpDialog>
        <Container maxWidth="lg" className="app-container">
          <Home />
        </Container>
      </ThemeProvider>
    )
  }

}

export default App;