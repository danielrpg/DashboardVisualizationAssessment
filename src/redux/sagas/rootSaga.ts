import { all, fork } from 'redux-saga/effects';
import metricsSaga from './metricsSaga/metricsSage';

export function* rootSaga() {
  yield all([fork(metricsSaga)]);
}
