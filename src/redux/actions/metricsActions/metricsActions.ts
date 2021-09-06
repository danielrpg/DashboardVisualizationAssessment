import { MetricTypes } from '../../actionTypes/metricsTypes';
import {
  FetchMetricsFailure,
  FetchMetricsFailurePayload,
  FetchMetricsRequest,
  FetchMetricsSuccess,
  FetchMetricsSuccessPayload,
} from '../../types/metricsTypes';

export const fetchMetricsRequest = (): FetchMetricsRequest => ({
  type: MetricTypes.FETCH_METRIC_REQUEST,
});

export const fetchMetricsSuccess = (payload: FetchMetricsSuccessPayload): FetchMetricsSuccess => ({
  type: MetricTypes.FETCH_METRIC_SUCCESS,
  payload,
});

export const fetchMetricsFailure = (payload: FetchMetricsFailurePayload): FetchMetricsFailure => ({
  type: MetricTypes.FETCH_METRIC_FAILURE,
  payload,
});
