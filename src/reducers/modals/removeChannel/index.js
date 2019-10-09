import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../../../actions';

const isShow = handleActions(
  {
    [actions.setRemovingChannelId](state, { payload }) {
      return true;
    },
    [actions.clearRemovingChannelId](state, { payload }) {
      return false;
    },
  },
  false,
);

export default combineReducers({ isShow });
