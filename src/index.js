import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "react-table/react-table.css";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';

import configureStore from './store';

const initialState = {};
const history = createHistory();

const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App}/>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root'));
registerServiceWorker();
