import { SagaIterator } from '@redux-saga/types';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { gql } from '@apollo/client';
import { fetchMetricsFailure, fetchMetricsSuccess } from '../../actions/metricsActions/metricsActions';
import { MetricTypes } from '../../actionTypes/metricsTypes';
import client from '../../../config/apolloClient';

const GET_METRICS = gql`
  query {
    getMetrics
  }
`;

function getAllMetrics() {
  return client.query({ query: GET_METRICS }).then((response) => response.data);
}

function* fetchMetricsSaga(): SagaIterator {
  try {
    const response = yield call(getAllMetrics);
    const metrics = response.getMetrics.map((metric: string, index: number) => ({ metric, value: index + 1 }));
    yield put(
      fetchMetricsSuccess({
        metrics,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchMetricsFailure({
        error: e.message,
      }),
    );
  }
}

function* metricsSaga() {
  yield all([takeLatest(MetricTypes.FETCH_METRIC_REQUEST, fetchMetricsSaga)]);
}

export default metricsSaga;
