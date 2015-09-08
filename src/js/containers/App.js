import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { fetchData } from 'actions';
import { Cloudy, Fair, Flurries, Rainy, SunShower, Sunny, ThunderStorm, Windy } from 'components';

export default class App extends Component {
  componentDidMount() {
    this.props.fetchData('Taichung');
  }

  onClickTemp(e) {
    console.log(e.currentTarget);
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

    return (
      <div className="weather">
        <div className="weather-today">
          <div className="weather-icon">
            {mapping[this.props.today.code]}
          </div>
          <div className="weather-info">
            <div className="weather-detail">
              <span className="weather-local">{this.props.today.local}</span>
              <span className="weather-date">{this.props.today.date}</span>
              <span className="weather-type">{this.props.today.type}</span>
            </div>
            <div className="weather-temp">
              <span className="weather-degree">
                <span ref="degree">{this.props.today.degree}</span>
                <span className="weather-temperature" onClick={this.onClickTemp}>F</span>
              </span>
            </div>
          </div>
        </div>
        <div className="weather-week">
          <ul className="weather-days">
            {weekdays.map((value, index) => {
              const { day, forecast } = this.props.today;
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
  today: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { today } = state;

  return {
    today: today,
  };
}

export default connect(
  mapStateToProps,
  { fetchData }
)(App);
