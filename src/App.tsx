import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';
import Container from '@material-ui/core/Container';
import mainTheme from './styles/mainTheme';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={mainTheme}>
      <Container maxWidth="lg" className="app-container">
        <div>Content goes here</div>
      </Container>
    </ThemeProvider>
  );
}

export default App;