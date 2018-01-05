import { all, takeLatest, put, call } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';

import {
  REQUEST_CLIENTS,
  requestClientsSucceeded,
  requestClientsFailed,
  REQUEST_ADD_CLIENT,
  requestAddClientSuccess, REQUEST_EDIT_CLIENT, requestAddClientFailed, requestEditClientFailed,
  requestEditClientSuccess,
} from "../actions/clientActions";
import * as api from '../../services/clientsApi';

function* requestClientsSaga() {
  try {
    const response = yield api.getClients();
    yield put(requestClientsSucceeded(response));
  }
  catch (err) {
    yield put(requestClientsFailed(err));
  }
}

function* requestAddClientSaga(action) {
  try {
    const response = yield api.postClient(action.client);
    yield put(requestAddClientSuccess(response.id));
    yield put(goBack());
  }
  catch (err) {
    yield put(requestAddClientFailed(err));
  }
}

function* requestEditClientSaga(action){
  try {
    const response = yield api.putClient(action.client);
    yield put(requestEditClientSuccess(response.id));
    yield put(goBack());
  }
  catch (err) {
    yield put(requestEditClientFailed(err));
  }
}

function* watchRequestClients() {
  yield takeLatest(REQUEST_CLIENTS, requestClientsSaga);
}

function* watchRequestAddClient() {
  yield takeLatest(REQUEST_ADD_CLIENT, requestAddClientSaga);
}

function* watchRequestEditClient(){
  yield takeLatest(REQUEST_EDIT_CLIENT, requestEditClientSaga);
}

export default function* defaultSaga() {
  yield all([
    watchRequestClients(),
    watchRequestAddClient(),
    watchRequestEditClient(),
  ]);
}