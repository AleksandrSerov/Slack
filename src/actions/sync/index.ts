import { createAction } from 'typesafe-actions';
import { MessagesType } from '../../entry';

export const setCurrentChannelId = createAction('CURRENT_CHANNEL_ID/SET')<{
  id: number;
}>();
export const sendMessageSuccess = createAction('MESSAGE_SEND/SUCCESS')();
export const sendMessageFailure = createAction('MESSAGE_SEND/FAILURE')();
export type MessageType = {
  id: number;
  channelId: number;
  text: string;
  username: string;
};
export const addMessage = createAction('MESSAGE/ADD')<{
  message: MessageType;
}>();

export const createChannelSuccess = createAction('CHANNEL_CREATE/SUCCESS')();
export const createChannelFailure = createAction('CHANNEL_CREATE/FAILURE')();
export type ChannelType = {
  id: number;
  name: string;
  removable: boolean;
};
export const addChannel = createAction('CHANNEL/ADD')<{channel: ChannelType}>();

export const removeChannelSuccess = createAction('CHANNEL_REMOVE/SUCCESS');
export const removeChannelFailure = createAction('CHANNEL_REMOVE/FAILURE');
export const removeChannelFromStore = createAction('CHANNEL/REMOVE')<{
  id: number;
  messages: MessagesType;
}>();

export const setRemovingChannelId = createAction('REMOVING_CHANNEL_ID/SET')<{
  id: number;
}>();
export const clearRemovingChannelId = createAction(
  'REMOVING_CHANNEL_ID/CLEAR',
)();

export const renameChannelSuccess = createAction('CHANNEL_RENAME/SUCCESS')();
export const renameChannelFailure = createAction('CHANNEL_RENAME/FAILURE')();
export const updateChannel = createAction('CHANNEL/UPDATE')<{channel: ChannelType}>();

export const setRenamingChannelId = createAction('RENAME_CHANNEL_ID/SET')<{
  id: number;
}>();
export const clearRenamingChannelId = createAction('RENAME_CHANNEL_ID/CLEAR')();

export const closeErrorModal = createAction('ERROR_MODAL/CLOSE')();
