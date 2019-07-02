import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';
import Container from '@material-ui/core/Container';
import themeDefault from './styles/theme-default';
import Button from '@material-ui/core/Button';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={themeDefault}>
      <Container maxWidth="lg" className="app-container">
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;