import { createAction } from 'redux-actions';

export const setInitialState = createAction('INITIAL_STATE/SET');
export const setCurrentChannelId = createAction('CURRENT_CHANNEL_ID/SET');

export const sendMessageRequest = createAction('MESSAGE_SEND_REQUEST');
export const sendMessageSuccess = createAction('MESSAGE_SEND_SUCCESS');
export const sendMessageFailure = createAction('MESSAGE_SEND_FAILURE');

export const addMessage = createAction('MESSAGE/ADD');
