import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from 'actions';
import { Cloudy, Fair, Flurries, Rainy, SunShower, Sunny, ThunderStorm, Windy } from 'components';

export default class App extends Component {
  componentDidMount() {
    this.props.fetchData();
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
