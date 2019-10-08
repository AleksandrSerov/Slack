import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../../actions';

const byId = handleActions(
  {
    [actions.addChannel](state, { payload }) {
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
    [actions.addChannel](state, { payload }) {
      const { attributes } = payload;
      return [...state, attributes.id];
    },
  },
  [],
);

const channels = combineReducers({ byId, allIds });

export default channels;
