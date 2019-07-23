import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router/Routes';
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';
import Container from '@material-ui/core/Container';
import theme from './styles/theme/theme-default';
import Header from './components/BpHeader/BpHeader';
import { observer, inject } from 'mobx-react';
import BpSnackbar from './components/BpSnackbar/BpSnackbar';
import BpDialog from './components/BpDialog/BpDialog';
import BpAppDrawer from './components/BpAppDrawer/BpAppDrawer';
import { ISnackbar } from './mobxStores/generalStore';
import {
  anchorOriginHorizontalEnum,
  anchorOriginVerticalEnum
} from './lib/enums/appEnum';

interface IApp {
  userStore: {
    _fetchUsers(): void
    users: any
  },
  generalStore: {
    _updateSnackbarStatus(data: ISnackbar): void
    snackbarStatus: boolean
    dialogStatus?: boolean;
    dialogTitle: string;
    dialogShowCloseButton: boolean;
    dialogCloseButtonLabel: string;
    dialogChildren: any
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
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <BpAppDrawer />
          <BpSnackbar open={this.props.generalStore.snackbarStatus} />
          <BpDialog />
          <Container maxWidth="lg" className="app-container">
            <Routes />
          </Container>
        </ThemeProvider>
      </Router>
    )
  }

}

export default App;