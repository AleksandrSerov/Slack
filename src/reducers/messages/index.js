import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../../actions';

const byId = handleActions(
  {
    [actions.addMessage](state, { payload }) {
      const { attributes } = payload;

      return {
        ...state,
        [attributes.id]: attributes,
      };
    },
    [actions.removeChannelFromStore](state, { payload }) {
      const { id, messages } = payload;

      return messages.allIds.reduce((acc, messageId) => {
        if (messages.byId[messageId].channelId !== id) {
          return {
            ...acc,
            [messageId]: messages.byId[messageId],
          };
        }

        return acc;
      }, {});
    },
  },
  {},
);
const allIds = handleActions(
  {
    [actions.addMessage](state, { payload }) {
      const { attributes } = payload;

      return [...state, attributes.id];
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
