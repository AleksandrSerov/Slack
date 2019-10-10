import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';

import actions from '../actions';
import messages from './messages';
import channels from './channels';
import modals from './modals';

const currentChannelId = handleActions(
  {
    [actions.setCurrentChannelId](state, { payload }) {
      return payload.id;
    },
  },
  null,
);

const sendMessageState = handleActions(
  {
    [actions.sendMessageRequest]() {
      return 'request';
    },
    [actions.sendMessageSuccess]() {
      return 'success';
    },
    [actions.sendMessageFailure]() {
      return 'failure';
    },
  },
  'none',
);

const createChannelState = handleActions(
  {
    [actions.createChannelRequest]() {
      return 'request';
    },
    [actions.createChannelSuccess]() {
      return 'success';
    },
    [actions.createChannelFailure]() {
      return 'failure';
    },
  },
  'none',
);

const removingChannelId = handleActions(
  {
    [actions.setRemovingChannelId](state, { payload }) {
      return payload.id;
    },
    [actions.clearRemovingChannelId]() {
      return null;
    },
  },
  null,
);

const renamingChannelId = handleActions(
  {
    [actions.setRenamingChannelId](state, { payload }) {
      return payload.id;
    },
    [actions.clearRenamingChannelId]() {
      return null;
    },
  },
  null,
);

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  removingChannelId,
  renamingChannelId,
  sendMessageState,
  createChannelState,
  modals,
  form: formReducer,
});
