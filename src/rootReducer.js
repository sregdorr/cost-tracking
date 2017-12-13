import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import entitiesReducers from './entities/reducers';


const rootReducer = combineReducers({
  router: routerReducer,
  ...entitiesReducers,
});

export default rootReducer;