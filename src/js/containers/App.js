import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from 'actions';
import { Sunny, Windy, Cloudy, Fair } from 'components';

export default class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="weather">
        <div className="weather-today">
          <Fair />
          <div className="weather-info">
            <div className="weather-detail">
              <span className="weather-local">Taichung</span>
              <span className="weather-date">2015-09-08</span>
              <span className="weather-type">Sunny</span>
            </div>
            <div className="weather-temp">
              <span className="weather-degree">
                79
                <span className="weather-temperature">°F</span>
              </span>
            </div>
          </div>
        </div>
        <div className="weather-week">
          <ul className="weather-days">
            <li className="weather-day">
              <span className="weather-weekday">SUN</span>
              <Sunny />
            </li>
            <li className="weather-day">
              <span className="weather-weekday">MON</span>
              <Sunny />
            </li>
            <li className="weather-day is-today">
              <span className="weather-weekday">TUE</span>
              <Sunny />
            </li>
            <li className="weather-day">
              <span className="weather-weekday">WED</span>
              <Sunny />
            </li>
            <li className="weather-day">
              <span className="weather-weekday">THU</span>
              <Sunny />
            </li>
            <li className="weather-day">
              <span className="weather-weekday">FRI</span>
              <Sunny />
            </li>
            <li className="weather-day">
              <span className="weather-weekday">SAT</span>
              <Sunny />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired
};

export default connect(
  null,
  { fetchData }
)(App);
