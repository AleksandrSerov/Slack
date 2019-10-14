import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { omitBy } from 'lodash';
import actions from '../../actions';

const byId = handleActions(
  {
    [actions.addMessage](state, { payload }) {
      const { message } = payload;

      return {
        ...state,
        [message.id]: message,
      };
    },
    [actions.removeChannelFromStore](state, { payload }) {
      const { id } = payload;
      return omitBy(state, ({ channelId }) => channelId === id);
    },
  },
  {},
);
const allIds = handleActions(
  {
    [actions.addMessage](state, { payload }) {
      const { message } = payload;

      return [...state, message.id];
    },
    [actions.removeChannelFromStore](state, { payload }) {
      const { id, messages } = payload;
      return state.filter(
        (messageId) => messages.byId[messageId].channelId !== id,
      );
    },
  },
  [],
);

const messages = combineReducers({ byId, allIds });

export default messages;
