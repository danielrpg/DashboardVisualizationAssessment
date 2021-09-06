import { combineReducers } from 'redux';
import metricReducer from './metricsReducer/metricsReducer';

const rootReducer = combineReducers({
  metrics: metricReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
