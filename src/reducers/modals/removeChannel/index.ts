import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import actions from '../../../actions';

const isShow = createReducer(false)
.handleAction(actions.setRemovingChannelId, () => true)
.handleAction(actions.clearRemovingChannelId, () => false)

const removeChannelModal = combineReducers({ isShow });
export default removeChannelModal;
