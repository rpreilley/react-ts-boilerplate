import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Mobx Store: Make the store available to all container components in the app without passing it explicitly
import { Provider } from 'mobx-react';
import { userStore } from './mobxStores/userStore';
import { generalStore } from './mobxStores/generalStore';

const stores = {
  userStore,
  generalStore
}

/* 
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/
const Root: React.FC = props => {
  return (
    <Provider {...stores}>
      <App />
    </Provider>
  );
};

// Generate the store
// const store = configureStore();
// store.dispatch(getAllUsers());

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
