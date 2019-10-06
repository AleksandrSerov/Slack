import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers';
import UsernameContext from '../../UsernameContext';
import Slack from './Slack';
import { convertInitialState, getUsername } from './_helpers';

const initState = convertInitialState(window.gon);
const username = getUsername();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
/* eslint-enable */

const store = createStore(
  rootReducer,
  initState,
  composeEnhancers(applyMiddleware(thunk)),
);

export default () => {
  ReactDOM.render(
    <Provider store={store}>
      <UsernameContext.Provider value={{ username }}>
        <Slack />
      </UsernameContext.Provider>
    </Provider>,
    document.getElementById('app'),
  );
};
