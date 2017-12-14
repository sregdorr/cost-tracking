import { all, spawn } from 'redux-saga/effects';
import entitiesSaga from './entities/sagas/clientSagas';

export default function* rootSaga() {
  yield all([
    spawn(entitiesSaga)
  ]);
}