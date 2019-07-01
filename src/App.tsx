import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/header/Header';
import mainTheme from './styles/mainTheme';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg" className="app-container">
          <div>Hello, World</div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
