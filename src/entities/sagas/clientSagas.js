import { all, takeLatest, put, call } from 'redux-saga/effects';
import {
  REQUEST_CLIENTS,
  requestClientsSucceeded,
  requestClientsFailed,
  REQUEST_ADD_CLIENT,
  requestAddClientSuccess,
  requestAddClientFailed,
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
    const response = yield api.putClient(action.client);
    yield put(requestAddClientSuccess(response.id));
  }
  catch (err) {
    yield put(requestClientsFailed(err));
  }
}

function* watchRequestClients() {
  yield takeLatest(REQUEST_CLIENTS, requestClientsSaga);
}

function* watchRequestAddClient() {
  yield takeLatest(REQUEST_ADD_CLIENT, requestAddClientSaga);
}

export default function* defaultSaga() {
  yield all([
    watchRequestClients(),
    watchRequestAddClient(),
  ]);
}