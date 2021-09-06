import { IMetric } from '../../model/IMetric';
import { MetricTypes } from '../actionTypes/metricsTypes';

export interface MetricsState {
  pending: boolean;
  metrics: IMetric[];
  error: string | null;
}

export interface FetchMetricsSuccessPayload {
  metrics: IMetric[];
}

export interface FetchMetricsFailurePayload {
  error: string;
}

export interface FetchMetricsRequest {
  type: typeof MetricTypes.FETCH_METRIC_REQUEST;
}

export type FetchMetricsSuccess = {
  type: typeof MetricTypes.FETCH_METRIC_SUCCESS;
  payload: FetchMetricsSuccessPayload;
};

export type FetchMetricsFailure = {
  type: typeof MetricTypes.FETCH_METRIC_FAILURE;
  payload: FetchMetricsFailurePayload;
};

export type MetricsActions = FetchMetricsRequest | FetchMetricsSuccess | FetchMetricsFailure;
