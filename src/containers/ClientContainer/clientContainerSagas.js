import { all, takeLatest, call } from 'redux-saga/effects';
import { REQUEST_CLIENTS } from "./clientContainerActions";
import { ipcRenderer } from 'electron';

function sendNotification({ eventArg, payload=null }) {
  ipcRenderer.send(eventArg, payload);
}

function* requestClientsSaga() {
  yield call(sendNotification, { eventArg: "test:send" });
}

function* watchRequestClients() {
  yield takeLatest(REQUEST_CLIENTS, requestClientsSaga);
}

export default function* clientContainerSagas() {
  yield all([
    watchRequestClients(),
  ]);
}