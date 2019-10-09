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
    [actions.sendMessageRequest](state, { payload }) {
      return 'request';
    },
    [actions.sendMessageSuccess](state, { payload }) {
      return 'success';
    },
    [actions.sendMessageFailure](state, { payload }) {
      return 'failure';
    },
  },
  'none',
);

const createChannelState = handleActions(
  {
    [actions.createChannelRequest](state, { payload }) {
      return 'request';
    },
    [actions.createChannelSuccess](state, { payload }) {
      return 'success';
    },
    [actions.createChannelFailure](state, { payload }) {
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
    [actions.clearRemovingChannelId](state, { payload }) {
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
  sendMessageState,
  createChannelState,
  modals,
  form: formReducer,
});
