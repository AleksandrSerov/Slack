import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import _ from 'lodash';
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
    [actions.removeChannelFromStore](state, { payload }) {
      const { id } = payload;
      return _.omit(state, id);
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
    [actions.removeChannelFromStore](state, { payload }) {
      const { id } = payload;
      return state.filter((channelId) => channelId !== id);
    },
  },
  [],
);

const channels = combineReducers({ byId, allIds });

export default channels;
