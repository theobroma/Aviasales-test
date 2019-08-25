// import { FETCH_USERS_PENDING } from '../actions';
import { POLL_START, POLL_STOP, GET_DATA_SUCCESS, GET_DATA_FAILURE } from 'constants/actions';

// export const initialState = {
//   tickets: [],
//   stop: false,
//   pending: false,
//   errorMessage: '',
// };

// function tickets(state = initialState, action) {
//   return state;
// }

const initialState = {
  // data: false,
  // polling: false,
  tickets: [],
  stop: false,
  polling: false,
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case POLL_START:
      return {
        ...state,
        polling: true,
      };
    case POLL_STOP:
      return {
        ...state,
        polling: false,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default tickets;
