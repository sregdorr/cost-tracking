import { all, spawn } from 'redux-saga/effects';
import clientContainerSagas from "./containers/ClientContainer/clientContainerSagas";

export default function* rootSaga() {
  yield all([
    spawn(clientContainerSagas)
  ]);
}