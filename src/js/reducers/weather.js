import { FETCH_REQUEST, FETCH_SUCCESS } from 'actions';

const initialState = {
  local: 'Loading',
  day: 'unknow',
  degree: '--',
  forecast: []
};

export default function Weather(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return state;

    case FETCH_SUCCESS:
      const {
        location: { city },
        item: { forecast, condition },
        atmosphere: { humidity },
        wind: { speed }
      } = action.json.query.results.channel;

      const { date, day, high, low } = forecast[0];
      const { code, temp, text } = condition;

      return {
        local: city,
        date: date,
        humidity: humidity,
        windSpeed: speed,
        day: day,
        high: high,
        low: low,
        type: text,
        code: code,
        degree: temp,
        forecast: forecast
      };

    default:
      return state;
  }
}
