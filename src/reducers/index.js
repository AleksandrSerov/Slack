import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';

import messages from './messages';
import channels from './channels';
import actions from '../actions';

export const currentChannelId = handleActions(
  {
    [actions.setCurrentChannelId](state, { payload }) {
      return payload.id;
    },
  },
  null,
);

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  form: formReducer,
});
