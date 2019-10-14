import Cookies from 'js-cookie';
import faker from 'faker/locale/en';
import { keyBy } from 'lodash';

export const convertInitialState = (state) => {
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

export const getUsername = () => {
  const isUsernameExist = Boolean(Cookies.get('username'));

  if (!isUsernameExist) {
    const randomName = faker.name.findName();
    Cookies.set('username', randomName);
  }
  const username = Cookies.get('username');

  return username;
};
