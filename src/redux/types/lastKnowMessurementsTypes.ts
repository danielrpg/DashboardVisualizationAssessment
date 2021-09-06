import { ILastKnowMessurement } from '../../model/ILastKnowMessurement';
import { LastKnowMessurementsTypes } from '../actionTypes/lastKnowMessurementsType';

export interface LastKnowMessurementsState {
  pending: boolean;
  metrics: ILastKnowMessurement[];
  error: string | null;
}

export interface FetchLastKnowMessurementsSuccessPayload {
  metrics: ILastKnowMessurement[];
}

export interface FetchLastKnowMessurementsFailurePayload {
  error: string;
}

export interface FetchLastKnowMessurementsRequest {
  type: typeof LastKnowMessurementsTypes.FETCH_LAST_KNOW_MESSUREMENTS_REQUEST;
}

export type FetchLastKnowMessurementsSuccess = {
  type: typeof LastKnowMessurementsTypes.FETCH_LAST_KNOW_MESSUREMENTS_SUCCESS;
  payload: FetchLastKnowMessurementsSuccessPayload;
};

export type FetchLastKnowMessurementsFailure = {
  type: typeof LastKnowMessurementsTypes.FETCH_LAST_KNOW_MESSUREMENTS_FAILURE;
  payload: FetchLastKnowMessurementsFailurePayload;
};

export type LastKnowMessurementsActions =
  | FetchLastKnowMessurementsRequest
  | FetchLastKnowMessurementsSuccess
  | FetchLastKnowMessurementsFailure;
