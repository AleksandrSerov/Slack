import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
// import actions from '../actions';

export const channels = handleActions({}, []);

export const messages = handleActions({}, []);

export const currentChannelId = handleActions({}, null);

export default combineReducers({
  channels,
  messages,
  currentChannelId,
});
