import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';
import Container from '@material-ui/core/Container';
import themeDefault from './styles/theme-default';
import Header from './components/header/Header';
import Home from './views/home/Home';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={themeDefault}>
      <Header />
      <Container maxWidth="lg" className="app-container">
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;