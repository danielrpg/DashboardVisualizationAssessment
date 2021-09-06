import { LastKnowMessurementsTypes } from '../../actionTypes/lastKnowMessurementsType';
import {
  FetchLastKnowMessurementsFailure,
  FetchLastKnowMessurementsFailurePayload,
  FetchLastKnowMessurementsRequest,
  FetchLastKnowMessurementsSuccess,
  FetchLastKnowMessurementsSuccessPayload,
} from '../../types/lastKnowMessurementsTypes';

export const fetchLastKnowMessurementsRequest = (): FetchLastKnowMessurementsRequest => ({
  type: LastKnowMessurementsTypes.FETCH_LAST_KNOW_MESSUREMENTS_REQUEST,
});

export const fetchLastKnowMessurementsSuccess = (
  payload: FetchLastKnowMessurementsSuccessPayload,
): FetchLastKnowMessurementsSuccess => ({
  type: LastKnowMessurementsTypes.FETCH_LAST_KNOW_MESSUREMENTS_SUCCESS,
  payload,
});

export const fetchLastKnowMessurementsFailure = (
  payload: FetchLastKnowMessurementsFailurePayload,
): FetchLastKnowMessurementsFailure => ({
  type: LastKnowMessurementsTypes.FETCH_LAST_KNOW_MESSUREMENTS_FAILURE,
  payload,
});
