import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../../../actions';

const isShow = handleActions(
  {
    [actions.setRenamingChannelId](state, { payload }) {
      return true;
    },
    [actions.clearRenamingChannelId](state, { payload }) {
      return false;
    },
  },
  false,
);

export default combineReducers({ isShow });
