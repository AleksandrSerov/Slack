import { combineReducers } from 'redux';
import actions from '../../../actions';
import { createReducer } from 'typesafe-actions';


const isShow = createReducer<boolean>(false)
  .handleAction(actions.sendMessageFailure, () => true)
  .handleAction(actions.createChannelFailure, () => true)
  .handleAction(actions.renameChannelFailure, () => true)
  .handleAction(actions.closeErrorModal, () => false)

const errorType = createReducer<string | null>(null)
  .handleAction(actions.sendMessageFailure, () => 'sendMessageFailure')
  .handleAction(actions.createChannelFailure, () => 'createChannelFailure')
  .handleAction(actions.renameChannelFailure, () => 'renameChannelFailure')
  .handleAction(actions.closeErrorModal, () => null)

const errorModal = combineReducers({ isShow, errorType });

export default errorModal;
