import { MetricTypes } from '../../actionTypes/metricsTypes';
import { MetricsActions, MetricsState } from '../../types/metricsTypes';

const initialState: MetricsState = {
  pending: false,
  metrics: [],
  error: null,
};

export default (state = initialState, action: MetricsActions) => {
  switch (action.type) {
    case MetricTypes.FETCH_METRIC_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case MetricTypes.FETCH_METRIC_SUCCESS:
      return {
        ...state,
        pending: false,
        metrics: action.payload.metrics,
        error: null,
      };
    case MetricTypes.FETCH_METRIC_FAILURE:
      return {
        ...state,
        pending: false,
        metrics: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
