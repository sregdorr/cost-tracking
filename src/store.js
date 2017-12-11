import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState, history) {
  const router = routerMiddleware(history);

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        router,
        sagaMiddleware,
      )
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
}