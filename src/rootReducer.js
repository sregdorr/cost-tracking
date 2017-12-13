import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import entitiesReducers from './entities/reducers';
import clientContainer from './containers/ClientContainer/clientContainerReducer';


const rootReducer = combineReducers({
  router: routerReducer,
  ...entitiesReducers,
  clientContainer,
});

export default rootReducer;