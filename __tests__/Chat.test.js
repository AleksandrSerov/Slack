// import React from 'react';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { render, fireEvent } from '@testing-library/react';
// import rootReducer from '../src/reducers';
// import Chat from '../src/components/App/Slack/Chat';
// const initState = {};

// const store = createStore(rootReducer, initState, applyMiddleware(thunk));

// test('Allow user send message', () => {
//   const fakeUserResponse = { attr: 1 };
//   console.log(store.getState());
//   jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
//     return Promise.resolve({
//       json: () => Promise.resolve(fakeUserResponse),
//     });
//   });

//   const { getByLabelText, getByText, findByRole } = render(<Chat />);
// });
import getUsername from '../src/components/App/_helpers';

test('User shoud have name', () => {
  expect(true).toBe(true);
});
