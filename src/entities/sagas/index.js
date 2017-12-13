import { all, takeLatest, put } from 'redux-saga/effects';
import {
  REQUEST_CLIENTS,
  requestClientsSucceeded,
  requestClientsFailed
} from "../actions/clientActions";
import * as api from '../../services/clientsApi';

function* requestClientsSaga() {
  try {
    const response = yield api.fetchClients();
    yield put(requestClientsSucceeded(response));
  }
  catch (err) {
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