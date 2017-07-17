import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchBenches = () => dispatch => {
  const success = response => dispatch(receiveBenches(response.responseJSON));
  const failure = response => dispatch(receiveErrors(response.responseJSON));

  APIUtil.fetchBenches().then(success, failure);
};
