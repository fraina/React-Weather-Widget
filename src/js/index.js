require('../index.jade');
require('../css/application.sass');

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import App from 'containers/App';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        { () => <App /> }
      </Provider>
    );
  }
}

React.render(
  <Root />,
  document.getElementById('app')
);
