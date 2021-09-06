import { all, fork } from 'redux-saga/effects';
import metricsSaga from './metricsSaga/metricsSaga';

export function* rootSaga() {
  yield all([fork(metricsSaga)]);
}
