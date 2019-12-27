import * as types from './ConnectionManagerActions';

const initialState = {
  data: {},
  isFetching: false,
  success: false,
  failure: false,
  error: {},
};

export default function connectionManagerReducer(
  state = initialState,
  action = {},
) {
  switch (action.type) {
    case types.DISCOVER_PEERS_INPROGRESS:
      return {
        ...state,
        data: {},
        success: false,
        failure: false,
        isFetching: true,
      };
    case types.DISCOVER_PEERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        data: action.data,
      };
    case types.DISCOVER_PEERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        failure: true,
        error: action.error,
      };
    default:
      return state;
  }
}
