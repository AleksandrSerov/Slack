import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../../../actions';

const isShow = handleActions(
  {
    [actions.sendMessageFailure]() {
      return true;
    },
    [actions.createChannelFailure]() {
      return true;
    },
    [actions.renameChannelFailure]() {
      return true;
    },
    [actions.removeChannelFailure]() {
      return true;
    },
    [actions.closeErrorModal]() {
      return false;
    },
  },
  false,
);

const errorType = handleActions(
  {
    [actions.sendMessageFailure]() {
      return 'sendMessageFailure';
    },
    [actions.createChannelFailure]() {
      return 'createChannelFailure';
    },
    [actions.renameChannelFailure]() {
      return 'renameChannelFailure';
    },
    [actions.removeChannelFailure]() {
      return 'removeChannelFailure';
    },
    [actions.closeErrorModal]() {
      return null;
    },
  },
  null,
);

export default combineReducers({ isShow, errorType });
