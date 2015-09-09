import { FETCH_REQUEST, FETCH_SUCCESS } from 'actions';

const initialState = {
  local: 'Loading',
  day: 'unknow',
  degree: '--',
  forecast: []
};

export default function Weather(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      const {
        location: { city },
        item: { forecast, condition },
      } = action.json.query.results.channel;

      const { date, day } = forecast[0];
      const { code, temp, text } = condition;

      return {
        local: city,
        date: date,
        day: day,
        type: text,
        code: code,
        degree: temp,
        forecast: forecast
      }
      return state;

    default:
      return state;
  }
}
