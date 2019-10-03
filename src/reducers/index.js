import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export const channels = handleActions({}, []);

export const messages = handleActions({}, []);

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
});
