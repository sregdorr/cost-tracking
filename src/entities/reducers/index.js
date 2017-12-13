
import {
  RESET_ERROR_MESSAGE,
  REQUEST_CLIENTS,
  REQUEST_CLIENTS_SUCCESS,
  REQUEST_CLIENTS_FAILED,
} from '../actions/clientActions';
import merge from 'lodash/merge';
import paginate from './paginate';
import { combineReducers } from 'redux';

const initialState = {
  clients: {},
  projects: {},
};

// Updates an entity cache in response to any action with response.entities.
const entities = (state = initialState, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
};

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};

// Updates the pagination data for different actions.
const pagination = combineReducers({
  clients: paginate({
    mapActionToKey: action => action.key,
    types: [
      REQUEST_CLIENTS,
      REQUEST_CLIENTS_SUCCESS,
      REQUEST_CLIENTS_FAILED,
    ]
  }),
  projects: paginate({
    mapActionToKey: action => action.key,
    types: [
      REQUEST_CLIENTS,
      REQUEST_CLIENTS_SUCCESS,
      REQUEST_CLIENTS_FAILED,
    ]
  })
});

const reducers = {
  entities,
  pagination,
  errorMessage,
};

export default reducers;