import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import actions from '../../../actions';

const isShow = createReducer(false)
.handleAction(actions.setRenamingChannelId, () => true)
.handleAction(actions.clearRenamingChannelId, () => false)

const renameChannelModal = combineReducers({ isShow }); 
export default renameChannelModal;
