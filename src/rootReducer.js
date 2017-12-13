import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import entitiesReducers from './entities/reducers';
import clientContainer from './containers/ClientContainer/clientContainerReducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  router: routerReducer,
  form,
  ...entitiesReducers,
  clientContainer,
});

export default rootReducer;