import React, { Component } from 'react';

export default class ThunderStorm extends Component {
  render() {
    return (
      <div className="icon">
        <div className="cloud"></div>
        <div className="lightning">
          <div className="bolt"></div>
          <div className="bolt"></div>
        </div>
      </div>
    );
  }
}
