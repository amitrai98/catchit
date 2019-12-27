// contants for discover peers
export const DISCOVER_PEERS = 'DISCOVER_PEERS';
export const DISCOVER_PEERS_INPROGRESS = 'DISCOVER_PEERS_INPROGRESS';
export const DISCOVER_PEERS_SUCCESS = 'DISCOVER_PEERS_SUCCESS';
export const DISCOVER_PEERS_FAILURE = 'DISCOVER_PEERS_FAILURE';

export function discoverPeers(payload) {
  return {
    type: DISCOVER_PEERS,
    payload: payload,
  };
}

export function discoverPeersProgress(payload) {
  return {
    type: DISCOVER_PEERS_INPROGRESS,
    payload: payload,
  };
}

export function discoverPeersSuccess(payload) {
  return {
    type: DISCOVER_PEERS_SUCCESS,
    payload: payload,
  };
}
export function discoverPeersFailure(payload) {
  return {
    type: DISCOVER_PEERS_FAILURE,
    payload: payload,
  };
}
