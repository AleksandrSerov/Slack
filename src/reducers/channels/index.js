import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { omit } from 'lodash';
import actions from '../../actions';

const byId = handleActions(
  {
    [actions.addChannel](state, { payload }) {
      const { channel } = payload;

      return {
        ...state,
        [channel.id]: channel,
      };
    },
    [actions.removeChannelFromStore](state, { payload }) {
      const { id } = payload;
      return omit(state, id);
    },
    [actions.updateChannel](state, { payload }) {
      const { channel } = payload;

      return {
        ...state,
        [channel.id]: { ...channel },
      };
    },
  },
  {},
);

const allIds = handleActions(
  {
    [actions.addChannel](state, { payload }) {
      const { channel } = payload;
      return [...state, channel.id];
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
