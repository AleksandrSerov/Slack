import { keyBy } from 'lodash';
import { StateType } from '../entry';

export default (state: any): StateType => {
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
    form: {},
    modals: {
      errorModal: {
        isShow: false
      },
      removeChannel: {
        isShow: false
      },
      renameChannel: {
        isShow: false
      }
    },
    removingChannelId: null,
    renamingChannelId: null,
  };
};
