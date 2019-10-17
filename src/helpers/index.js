import { keyBy } from 'lodash';

export default (state) => {
  const { currentChannelId } = state;
  const messages = {
    allIds: state.messages.map(({ id }) => id),
    byId: keyBy(state.messages, ({ id }) => id),
  };

  const channels = {
    allIds: state.channels.map(({ id }) => id),
    byId: keyBy(state.channels, ({ id }) => id),
  };

  return {
    messages,
    channels,
    currentChannelId,
  };
};
