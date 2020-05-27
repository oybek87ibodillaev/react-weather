import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import WeatherApp from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  </Router>,
  document.getElementById('root')
);
