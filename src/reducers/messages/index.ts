import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { omitBy } from 'lodash';
import actions from '../../actions';
import { MessageType } from '../../actions/sync';

const byId = createReducer<{[key: number]: MessageType}>({})
  .handleAction(actions.addMessage, (state, { payload }) => {
    const { message } = payload;
    return {
      ...state,
      [message.id]: message,
    };
  })
  .handleAction(actions.removeChannelFromStore, (state, { payload }) => {
    const { id } = payload;
    return omitBy(state, ({ channelId }) => channelId === id);
  });

const allIds = createReducer<Array<number>>([])
  .handleAction(actions.addMessage, (state, { payload }) => {
    const { message } = payload;

    return [...state, message.id];
  })
  .handleAction(actions.removeChannelFromStore, (state, { payload }) => {
    const { messages, id } = payload;
    return state.filter(
      (messageId) => messages.byId[messageId].channelId !== id,
    );
  });

const messages = combineReducers({ byId, allIds });

export default messages;
