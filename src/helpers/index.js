import { keyBy } from 'lodash';

export default (state) => {
  const { currentChannelId } = state;
  const messages = {
    allIds: state.messages.map((message) => message.id),
    byId: keyBy(state.messages, ({ id }) => id),
  };

  const channels = {
    allIds: state.channels.map((channel) => channel.id),
    byId: keyBy(state.channels, ({ id }) => id),
  };

  return {
    messages,
    channels,
    currentChannelId,
  };
};
