import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../../../actions';

const isShow = handleActions(
  {
    [actions.setRemovingChannelId]() {
      return true;
    },
    [actions.clearRemovingChannelId]() {
      return false;
    },
  },
  false,
);

export default combineReducers({ isShow });
