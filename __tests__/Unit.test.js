import Cookies from 'js-cookie';
import { getUsername, convertInitialState } from '../src/helpers';

describe('Testings helpers', () => {
  test('getUserName', () => {
    // User alredy have coockie
    Cookies.set('username', 'testUser');
    expect(getUsername()).toBe('testUser');

    // User not have coockie
    Cookies.remove('username');
    expect(getUsername()).not.toBe('testUser');
    expect(getUsername()).not.toHaveLength(0);
  });

  test('convertInitialState empty', () => {
    // Empty state
    const expected = {
      messages: {
        allIds: [],
        byId: {},
      },
      channels: {
        allIds: [1, 2],
        byId: {
          '1': { id: 1, name: 'general', removable: false },
          '2': { id: 2, name: 'random', removable: false },
        },
      },
      currentChannelId: 1,
    };
    const initialState = {
      messages: [],
      channels: [
        { id: 1, name: 'general', removable: false },
        { id: 2, name: 'random', removable: false },
      ],
      currentChannelId: 1,
    };
    expect(convertInitialState(initialState)).toEqual(expected);
  });

  test('convertInitialState not empty', () => {
    const expected = {
      messages: {
        allIds: [4],
        byId: {
          '4': {
            text: 'test',
            username: 'Mrs. Alberto Huels',
            channelId: 1,
            id: 4,
          },
        },
      },
      channels: {
        allIds: [1, 2, 3],
        byId: {
          '1': { id: 1, name: 'general', removable: false },
          '2': { id: 2, name: 'random', removable: false },
          '3': { id: 3, name: 'test', removable: true },
        },
      },
      currentChannelId: 1,
    };
    const initialState = {
      channels: [
        { id: 1, name: 'general', removable: false },
        { id: 2, name: 'random', removable: false },
        { id: 3, name: 'test', removable: true },
      ],
      messages: [
        { text: 'test', username: 'Mrs. Alberto Huels', channelId: 1, id: 4 },
      ],
      currentChannelId: 1,
    };
    expect(convertInitialState(initialState)).toEqual(expected);
  });
});
