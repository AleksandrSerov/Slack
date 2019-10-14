import io from 'socket.io-client';

export default (actions) => {
  const socket = io();

  socket.on('newMessage', ({ data }) => {
    const { attributes: message } = data;
    actions.addMessage({ message });
  });
  socket.on('newChannel', ({ data }) => {
    const { attributes: channel } = data;
    actions.addChannel({ channel });
  });
  socket.on('removeChannel', ({ data }) => {
    const { currentChannelId, channels, messages } = this.props;
    const { id } = data;
    actions.removeChannelFromStore({ id, messages });
    if (currentChannelId !== id) {
      return;
    }
    const [firstChannelId] = channels.allIds;
    actions.setCurrentChannelId({
      id: firstChannelId,
    });
  });
  socket.on('renameChannel', ({ data }) => {
    const { attributes: channel } = data;
    actions.updateChannel({ channel });
  });
};
