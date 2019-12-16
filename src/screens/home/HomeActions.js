// contants for load home
export const LOAD_HOME = 'LOAD_HOME';
export const LOAD_HOME_INPROGRESS = 'LOAD_HOME_INPROGRESS';
export const LOAD_HOME_SUCCESS = 'LOAD_HOME_SUCCESS';
export const LOAD_HOME_FAILURE = 'LOAD_HOME_FAILURE';

export function loadHome(payload) {
  return {
    type: LOAD_HOME,
    payload: payload,
  };
}

export function loadHomeProgress(payload) {
  return {
    type: LOAD_HOME_INPROGRESS,
    payload: payload,
  };
}

export function loadHomeSuccess(payload) {
  return {
    type: LOAD_HOME_SUCCESS,
    payload: payload,
  };
}
export function loadHomeFailure(payload) {
  return {
    type: LOAD_HOME_FAILURE,
    payload: payload,
  };
}
