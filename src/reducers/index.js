import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../actions';

export const channels = handleActions(
  {
    [actions.setInitialState](state, { payload }) {
      return payload.channels;
    },
  },
  [],
);

export default combineReducers({
  channels,
});
