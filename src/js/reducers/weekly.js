import { FETCH_SUCCESS } from 'actions';

const initialState = {

};

export default function Time(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state;

    default:
      return state;
  }
}
