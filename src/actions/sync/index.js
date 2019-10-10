import { createAction } from 'redux-actions';

export const setInitialState = createAction('INITIAL_STATE/SET');

export const setCurrentChannelId = createAction('CURRENT_CHANNEL_ID/SET');

export const sendMessageRequest = createAction('MESSAGE_SEND/REQUEST');
export const sendMessageSuccess = createAction('MESSAGE_SEND/SUCCESS');
export const sendMessageFailure = createAction('MESSAGE_SEND/FAILURE');
export const addMessage = createAction('MESSAGE/ADD');

export const createChannelRequest = createAction('CHANNEL_CREATE/REQUEST');
export const createChannelSuccess = createAction('CHANNEL_CREATE/SUCCESS');
export const createChannelFailure = createAction('CHANNEL_CREATE/FAILURE');
export const addChannel = createAction('CHANNEL/ADD');

export const openRemoveChannelModal = createAction('REMOVE_CHANNEL_MODAL/OPEN');
export const closeRemoveChannelModal = createAction(
  'REMOVE_CHANNEL_MODAL/CLOSE',
);

export const removeChannelRequest = createAction('CHANNEL_REMOVE/REQUEST');
export const removeChannelSuccess = createAction('CHANNEL_REMOVE/SUCCESS');
export const removeChannelFailure = createAction('CHANNEL_REMOVE/FAILURE');
export const removeChannelFromStore = createAction('CHANNEL/REMOVE');

export const setRemovingChannelId = createAction('REMOVING_CHANNEL_ID/SET');
export const clearRemovingChannelId = createAction('REMOVING_CHANNEL_ID/CLEAR');

export const renameChannelRequest = createAction('CHANNEL_RENAME/REQUEST');
export const renameChannelSuccess = createAction('CHANNEL_RENAME/SUCCESS');
export const renameChannelFailure = createAction('CHANNEL_RENAME/FAILURE');
export const updateChannel = createAction('CHANNEL/UPDATE');

export const setRenamingChannelId = createAction('RENAME_CHANNEL_ID/SET');
export const clearRenamingChannelId = createAction('RENAME_CHANNEL_ID/CLEAR');

export const closeErrorModal = createAction('ERROR_MODAL/CLOSE');
