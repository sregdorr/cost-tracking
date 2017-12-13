import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './themes/default';

import configureStore from './store';

const initialState = {};
const history = createHistory();

const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <Route component={App}/>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root'));
// registerServiceWorker();
