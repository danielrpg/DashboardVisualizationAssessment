import { combineReducers } from 'redux';
import lastKnowMessurementsReducer from './lastKnowMessurementsReducer/lastKnowMessurementsReducer';
import metricReducer from './metricsReducer/metricsReducer';

const rootReducer = combineReducers({
  lastKnowMessurements: lastKnowMessurementsReducer,
  metrics: metricReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
