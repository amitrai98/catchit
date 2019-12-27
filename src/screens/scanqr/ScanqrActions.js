// contants for qr scanner
export const STARTSCANER = 'STARTSCANER';
export const STARTSCANER_INPROGRESS = 'STARTSCANER_INPROGRESS';
export const STARTSCANER_SUCCESS = 'STARTSCANER_SUCCESS';
export const STARTSCANER_FAILURE = 'STARTSCANER_FAILURE';

export function startQrScanner(payload) {
  return {
    type: STARTSCANER,
    payload: payload,
  };
}

export function startQrScannerProgress(payload) {
  return {
    type: STARTSCANER_INPROGRESS,
    payload: payload,
  };
}

export function startQrScannerSuccess(payload) {
  return {
    type: STARTSCANER_SUCCESS,
    payload: payload,
  };
}
export function startQrScannerFailure(payload) {
  return {
    type: STARTSCANER_FAILURE,
    payload: payload,
  };
}
