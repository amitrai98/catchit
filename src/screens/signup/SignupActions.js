// contants for attempt signup
export const ATTEMT_SIGNUP = 'ATTEMT_SIGNUP';
export const ATTEMT_SIGNUP_INPROGRESS = 'ATTEMT_SIGNUP_INPROGRESS';
export const ATTEMT_SIGNUP_SUCCESS = 'ATTEMT_SIGNUP_SUCCESS';
export const ATTEMT_SIGNUP_FAILURE = 'ATTEMT_SIGNUP_FAILURE';

export function attemptSignup(payload) {
  return {
    type: ATTEMT_SIGNUP,
    payload: payload,
  };
}

export function attemptSignupProgress(payload) {
  return {
    type: ATTEMT_SIGNUP_INPROGRESS,
    payload: payload,
  };
}

export function attemptSignupSuccess(payload) {
  return {
    type: ATTEMT_SIGNUP_SUCCESS,
    payload: payload,
  };
}
export function attemptSignupFailure(payload) {
  return {
    type: ATTEMT_SIGNUP_FAILURE,
    payload: payload,
  };
}
