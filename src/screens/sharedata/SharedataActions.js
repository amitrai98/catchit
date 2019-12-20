// contants for selecting file
export const SELECT_FILE = 'SELECT_FILE';
export const SELECT_FILE_INPROGRESS = 'SELECT_FILE_INPROGRESS';
export const SELECT_FILE_SUCCESS = 'SELECT_FILE_SUCCESS';
export const SELECT_FILE_FAILURE = 'SELECT_FILE_FAILURE';

export function selectFile(payload) {
  return {
    type: SELECT_FILE,
    payload: payload,
  };
}

export function selectFileProgress(payload) {
  return {
    type: SELECT_FILE_INPROGRESS,
    payload: payload,
  };
}

export function selectFileSuccess(payload) {
  return {
    type: SELECT_FILE_SUCCESS,
    payload: payload,
  };
}
export function selectFileFailure(payload) {
  return {
    type: SELECT_FILE_FAILURE,
    payload: payload,
  };
}
