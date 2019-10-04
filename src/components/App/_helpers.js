export default (state) => {
  const messages = {
    allIds: state.messages.map((message) => message.id),
    byId: state.messages.reduce(
      (acc, message) => ({
        ...acc,
        [message.id]: message,
      }),
      {},
    ),
  };

  const channels = {
    allIds: state.channels.map((channel) => channel.id),
    byId: state.channels.reduce(
      (acc, channel) => ({
        ...acc,
        [channel.id]: channel,
      }),
      {},
    ),
  };

  return {
    messages,
    channels,
    currentChannelId: state.currentChannelId,
  };
};
