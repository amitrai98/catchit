// contants for initiating receiver actions
export const INTIATE_RECEIVER = 'INTIATE_RECEIVER';
export const INTIATE_RECEIVER_INPROGRESS = 'INTIATE_RECEIVER_INPROGRESS';
export const INTIATE_RECEIVER_SUCCESS = 'INTIATE_RECEIVER_SUCCESS';
export const INTIATE_RECEIVER_FAILURE = 'INTIATE_RECEIVER_FAILURE';

export function initiateReceiver(payload) {
  return {
    type: INTIATE_RECEIVER,
    payload: payload,
  };
}

export function initiateReceiverProgress(payload) {
  return {
    type: INTIATE_RECEIVER_INPROGRESS,
    payload: payload,
  };
}

export function initiateReceiverSuccess(payload) {
  return {
    type: INTIATE_RECEIVER_SUCCESS,
    payload: payload,
  };
}
export function initiateReceiverFailure(payload) {
  return {
    type: INTIATE_RECEIVER_FAILURE,
    payload: payload,
  };
}
