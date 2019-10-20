import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
  bindActionCreators,
} from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import io from 'socket.io-client';
import gon from 'gon';
import faker from 'faker/locale/en';
import rootReducer from './reducers';
import UsernameContext from './usernameContext';
import convertInitialState from './helpers';
import actionCreators from './actions';
import App from './components/App';

import './i18n';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
/* eslint-enable */

const initialState = convertInitialState(gon);
const username = Cookies.get('username') || faker.name.findName();

if (!Cookies.get('username')) {
  Cookies.set('username', username);
}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

const socket = io();
const { dispatch, getState } = store;
const actions = bindActionCreators(actionCreators, dispatch);

socket.on('newMessage', ({ data }) => {
  const { attributes: message } = data;
  actions.addMessage({ message });
});
socket.on('newChannel', ({ data }) => {
  const { attributes: channel } = data;
  actions.addChannel({ channel });
});
socket.on('removeChannel', ({ data }) => {
  const { id } = data;
  const { channels, messages, currentChannelId } = getState();
  actions.removeChannelFromStore({ id, messages });
  if (currentChannelId !== id) {
    return;
  }
  const [firstChannelId] = channels.allIds;
  actions.setCurrentChannelId({
    id: firstChannelId,
  });
});
socket.on('renameChannel', ({ data }) => {
  const { attributes: channel } = data;
  actions.updateChannel({ channel });
});

export default () => {
  ReactDOM.render(
    <Provider store={store}>
      <UsernameContext.Provider value={{ username }}>
        <App />
      </UsernameContext.Provider>
    </Provider>,
    document.getElementById('app'),
  );
};
