import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { fetchData } from 'actions';
import { Cloudy, Fair, Flurries, Rainy, SunShower, Sunny, ThunderStorm, Windy } from 'components';

export default class App extends Component {
  componentDidMount() {
    this.props.fetchData('Taichung');
    this.timer = setInterval(() => {
      this.props.fetchData('Taichung');
    }, 50000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const mapping = [
      <Windy />,
      <ThunderStorm />,
      <Windy />,
      <ThunderStorm />,
      <ThunderStorm />,
      <Rainy />,
      <Rainy />,
      <Flurries />,
      <Rainy />,
      <Rainy />,
      <Rainy />,
      <Rainy />,
      <Rainy />,
      <Flurries />,
      <Flurries />,
      <Flurries />,
      <Flurries />,
      <Rainy />,
      <Rainy />,
      <Cloudy />,
      <Cloudy />,
      <Cloudy />,
      <Cloudy />,
      <Cloudy />,
      <Windy />,
      <Windy />,
      <Cloudy />,
      <Cloudy />,
      <Cloudy />,
      <Cloudy />,
      <Cloudy />,
      <Sunny night="true" />,  // night - clear
      <Sunny />,
      <Fair />,
      <Fair night="true" />,  // night
      <Rainy />,
      <Sunny />,
      <ThunderStorm />,
      <ThunderStorm />,
      <ThunderStorm />,
      <Rainy />,
      <Flurries />,
      <Flurries />,
      <Flurries />,
      <Cloudy />,
      <ThunderStorm />,
      <Flurries />,
      <ThunderStorm />
    ]

    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const { local, date, type, degree, code, day, forecast } = this.props.weather;

    return (
      <div className="weather">
        <div className="weather-today">
          <div className="weather-icon">
            {mapping[code]}
          </div>
          <div className="weather-info">
            <div className="weather-detail">
              <span className="weather-local">{local}</span>
              <span className="weather-date">{date}</span>
              <span className="weather-type">{type}</span>
            </div>
            <div className="weather-temp">
              <span className="weather-degree">
                <span ref="degree">{degree}</span>
                <span className="weather-temperature">F</span>
              </span>
            </div>
          </div>
        </div>
        <div className="weather-week">
          <ul className="weather-days">
            {weekdays.map((value, index) => {
              const today = (value.toUpperCase() == day.toUpperCase()) ? true : false;
              const passDays = 7 - (forecast.length);
              const currentForecastIndex = index - passDays;
              const currentForecast = forecast[currentForecastIndex];
              return (
                <li key={index} ref={value}
                  className={classNames("weather-day", { 'is-today': today, 'is-passed': !currentForecast })}>
                  <span className="weather-weekday">{value}</span>
                  {currentForecast ? mapping[currentForecast.code] : ''}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  weather: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { weather } = state;
  return {
    weather: weather,
  };
}

export default connect(
  mapStateToProps,
  { fetchData }
)(App);
