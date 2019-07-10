import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';
import Container from '@material-ui/core/Container';
import themeDefault from './styles/theme-default';
import Header from './components/header/Header';
import Home from './views/home/Home';

import { observer, inject } from 'mobx-react';
import BpSnackbar from './components/BpSnackbar/BpSnackbar';
import {anchorOriginHorizontalEnum, anchorOriginVerticalEnum } from './lib/enums/snackbarEnum';

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
  //     snackbarVariant: 'warning'
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
  }) => {
    this.props.generalStore._updateSnackbarStatus(data);
  }

  render() {
    return (
      <ThemeProvider theme={themeDefault}>
        <Header />
        <BpSnackbar open={this.props.generalStore.snackbarStatus} />
        <Container maxWidth="lg" className="app-container">
          <Home />
        </Container>
      </ThemeProvider>
    )
  }

}

export default App;