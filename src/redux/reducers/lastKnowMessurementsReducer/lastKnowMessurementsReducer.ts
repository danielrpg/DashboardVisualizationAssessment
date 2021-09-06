import { LastKnowMessurementsTypes } from '../../actionTypes/lastKnowMessurementsType';
import { LastKnowMessurementsActions, LastKnowMessurementsState } from '../../types/lastKnowMessurementsTypes';

const initialState: LastKnowMessurementsState = {
  pending: false,
  metrics: [],
  error: null,
};

export default (state = initialState, action: LastKnowMessurementsActions) => {
  switch (action.type) {
    case LastKnowMessurementsTypes.FETCH_LAST_KNOW_MESSUREMENTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case LastKnowMessurementsTypes.FETCH_LAST_KNOW_MESSUREMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        metrics: action.payload.metrics,
        error: null,
      };
    case LastKnowMessurementsTypes.FETCH_LAST_KNOW_MESSUREMENTS_FAILURE:
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
