import Cookies from 'js-cookie';
import faker from 'faker/locale/en';

export const convertInitialState = (state) => {
  const { currentChannelId } = state;
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
    currentChannelId,
  };
};

export const getUsername = () => {
  const isUsernameExist = Boolean(Cookies.get('username'));

  if (!isUsernameExist) {
    const randomName = faker.name.findName();
    Cookies.set('username', randomName);
  }
  const username = Cookies.get('username');

  return username;
};
