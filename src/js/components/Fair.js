import React, { Component, PropTypes } from 'react';

export default class Fair extends Component {
  static defaultProps = { night: false };

  render() {
    return (
      <div className="icon">
        <div className="cloud"></div>
        <div className="sun">
          {this.props.night ? '' : <div className="rays"></div>}
        </div>
      </div>
    );
  }
}

Fair.propTypes = {
  night: PropTypes.bool,
};
