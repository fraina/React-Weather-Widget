import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from 'actions';

const initialState = {
  local: 'Loading',
  degree: '--'
};

export default function Today(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      const {
        location: { city },
        item: { forecast, condition },
      } = action.json.query.results.channel;

      const { date } = forecast[0];
      const { code, temp, text } = condition;

      return {
        local: city,
        date: date,
        type: text,
        code: code,
        degree: temp
      }
      return state;

    default:
      return state;
  }
}
