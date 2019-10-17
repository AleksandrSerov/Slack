import io from 'socket.io-client';
import { bindActionCreators } from 'redux';
import actionsCreators from '../actions/index';

export default (store) => {
  const socket = io();
  const { dispatch, getState } = store;
  const actions = bindActionCreators(actionsCreators, dispatch);

  socket.on('newMessage', ({ data }) => {
    const { attributes: message } = data;
    actions.addMessage({ message });
  });
  socket.on('newChannel', ({ data }) => {
    const { attributes: channel } = data;
    actions.addChannel({ channel });
  });
  socket.on('removeChannel', ({ data }) => {
    const { id } = data;
    const { channels, messages, currentChannelId } = getState();
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
