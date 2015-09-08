import fetch from 'isomorphic-fetch';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
const API_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20%E5%8F%B0%E4%B8%AD%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

export function fetchData() {
  return dispatch => {
    dispatch({ type: FETCH_REQUEST });
    return fetch(API_URL)
      .then(req => req.json())
      .then(json => dispatch({
        type: FETCH_SUCCESS,
        json
      }))
  }
}