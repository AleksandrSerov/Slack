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
  modals,
  form: formReducer,
});
