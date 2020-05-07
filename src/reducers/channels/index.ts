import { combineReducers } from 'redux';
import { omit } from 'lodash';
import actions from '../../actions';
import { createReducer } from 'typesafe-actions';
import {ChannelType} from '../../actions/sync';

const byId = createReducer<{[key: number]: ChannelType}>({})
  .handleAction(actions.addChannel, (state, { payload: { channel } }) => {
    return {
      ...state,
      [channel.id]: channel,
    };
  })
  .handleAction(actions.removeChannelFromStore, (state, { payload }) => {
    const { id } = payload;
    return omit(state, id);
  })
  .handleAction(actions.updateChannel, (state, { payload: { channel } }) => {
    return {
      ...state,
      [channel.id]: { ...channel },
    };
  });

const allIds = createReducer<Array<number>>([])
  .handleAction(actions.addChannel, (state, { payload: { channel } }) => {
    return [...state, channel.id];
  })
  .handleAction(
    actions.removeChannelFromStore,
    (state, { payload: { id } }) => {
      return state.filter((channelId) => channelId !== id);
    },
  );

const channels = combineReducers({ byId, allIds });

export default channels;
