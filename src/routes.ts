const host = '';
const prefix = 'api/v1';

export default {
  channelsPath: () => [host, prefix, 'channels'].join('/'),
  channelPath: (id?: number) => [host, prefix, 'channels', id].join('/'),
  channelMessagesPath: (id: number) =>
    [host, prefix, 'channels', id, 'messages'].join('/'),
};
