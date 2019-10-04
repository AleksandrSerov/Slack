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
  },
  {},
);
const allIds = handleActions(
  {
    [actions.addMessage](state, { payload }) {
      const { attributes } = payload;

      return [...state, attributes.id];
    },
  },
  [],
);

const messages = combineReducers({ byId, allIds });

export default messages;
