import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createReducer } from 'typesafe-actions';
import actions from '../actions';
import messages from './messages';
import channels from './channels';
import modals from './modals';

const currentChannelId = createReducer<number | null>(null).handleAction(
  actions.setCurrentChannelId,
  (state, { payload }) => payload.id,
);

const removingChannelId = createReducer<number | null>(null)
  .handleAction(
    actions.setRemovingChannelId,
    (state, { payload }) => payload.id,
  )
  .handleAction(actions.clearRemovingChannelId, () => null);

const renamingChannelId = createReducer<number | null>(null)
  .handleAction(
    actions.setRenamingChannelId,
    (state, { payload }) => payload.id,
  )
  .handleAction(actions.clearRenamingChannelId, () => 0);

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  removingChannelId,
  renamingChannelId,
  modals,
  form: formReducer,
});
