import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import faker from 'faker';
import rootReducer from '../../reducers';
import UsernameContext from '../../UsernameContext';
import Slack from '../Slack/Slack';
import convertInitialState from './_helpers';

const initState = convertInitialState(window.gon);
const isUsernameExist = Boolean(Cookies.get('username'));
if (!isUsernameExist) {
  const randomName = faker.name.findName();
  Cookies.set('username', randomName);
}
const username = Cookies.get('username');

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
