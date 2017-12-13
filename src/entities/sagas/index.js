import { all, takeLatest, put } from 'redux-saga/effects';
import {
  REQUEST_CLIENTS,
  requestClientsSucceeded,
  requestClientsFailed
} from "../actions";
import * as api from '../../services/api';

function* requestClientsSaga() {
  try {
    const response = yield api.fetchClients();
    yield console.log(response);
    yield put(requestClientsSucceeded(response));
  }
  catch (err) {
    yield console.log('error', err);
    yield put(requestClientsFailed(err));
  }

}

function* watchRequestClients() {
  yield takeLatest(REQUEST_CLIENTS, requestClientsSaga);
}

export default function* defaultSaga() {
  yield all([
    watchRequestClients(),
  ]);
}