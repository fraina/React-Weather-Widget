import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from 'actions';

const initialState = {

};

export default function Time(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      console.log(FETCH_SUCCESS);
      return state;

    default:
      return state;
  }
}
