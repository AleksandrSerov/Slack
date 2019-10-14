import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import faker from 'faker/locale/en';
import rootReducer from '../../reducers';
import UsernameContext from '../../usernameContext';
import Slack from './Slack';
import convertInitialState from '../../helpers';
import RemoveChannelModal from './Modals/RemoveChannelModal';
import RenameChannelModal from './Modals/RenameChannelModal';
import ErrorModal from './Modals/ErrorModal';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
/* eslint-enable */

const initState = convertInitialState(window.gon);
const username = Cookies.get('username') || faker.name.findName();

if (!Cookies.get('username')) {
  Cookies.set('username', username);
}

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
        <RemoveChannelModal />
        <RenameChannelModal />
        <ErrorModal />
      </UsernameContext.Provider>
    </Provider>,
    document.getElementById('app'),
  );
};
