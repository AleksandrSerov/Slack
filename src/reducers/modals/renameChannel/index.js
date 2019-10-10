import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../../../actions';

const isShow = handleActions(
  {
    [actions.setRenamingChannelId]() {
      return true;
    },
    [actions.clearRenamingChannelId]() {
      return false;
    },
  },
  false,
);

export default combineReducers({ isShow });
