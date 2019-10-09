import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../../../actions';

const isShow = handleActions(
  {
    [actions.openRemoveChannelModal](state, { payload }) {
      return true;
    },
    [actions.closeRemoveChannelModal](state, { payload }) {
      return false;
    },
  },
  false,
);

export default combineReducers({ isShow });
