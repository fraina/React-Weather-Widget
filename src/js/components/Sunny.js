import React, { Component, PropTypes } from 'react';

export default class Sunny extends Component {
  render() {
    return (
      <div className="icon">
        <div className="sun">
          {this.props.night ? '' : <div className="rays"></div>}
        </div>
      </div>
    );
  }
}

Sunny.propTypes = {
  night: PropTypes.bool
};
