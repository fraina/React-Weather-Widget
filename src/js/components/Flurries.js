import React, { Component } from 'react';

export default class Flurries extends Component {
  render() {
    return (
      <div className="icon">
        <div className="cloud"></div>
        <div className="snow">
          <div className="flake"></div>
          <div className="flake"></div>
        </div>
      </div>
    );
  }
}
