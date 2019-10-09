import Cookies from 'js-cookie';
import {
  getUsername,
  convertInitialState,
} from '../src/components/App/_helpers';

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
    const emptyState = {
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
    const state = {
      messages: [],
      channels: [
        { id: 1, name: 'general', removable: false },
        { id: 2, name: 'random', removable: false },
      ],
      currentChannelId: 1,
    };
    const expected = emptyState;
    expect(convertInitialState(state)).toEqual(expected);
  });
  // test('convertInitialState not empty', () => {});
});
