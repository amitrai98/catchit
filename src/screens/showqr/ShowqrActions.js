// contants for showing qr codes
export const SHOWQRCODE = 'SHOWQRCODE';
export const SHOWQRCODE_INPROGRESS = 'SHOWQRCODE_INPROGRESS';
export const SHOWQRCODE_SUCCESS = 'SHOWQRCODE_SUCCESS';
export const SHOWQRCODE_FAILURE = 'SHOWQRCODE_FAILURE';

export function showQrCode(payload) {
  return {
    type: SHOWQRCODE,
    payload: payload,
  };
}

export function showQrCodeProgress(payload) {
  return {
    type: SHOWQRCODE_INPROGRESS,
    payload: payload,
  };
}

export function showQrCodeSuccess(payload) {
  return {
    type: SHOWQRCODE_SUCCESS,
    payload: payload,
  };
}
export function showQrCodeFailure(payload) {
  return {
    type: SHOWQRCODE_FAILURE,
    payload: payload,
  };
}
