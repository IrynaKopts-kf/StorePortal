import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { configureStore } from './store';
import theme from './theme'
import './shared/defaultStyles.css'
import { hot } from 'react-hot-loader';

export const browserHistory = createBrowserHistory();
const store = configureStore();

const App = hot(module)((): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Routes/>
      </Router>
    </Provider>
  </ThemeProvider>
));

export default App;
