import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import faker from 'faker';
import Channels from '../Channels/Channels';
import Chat from '../Chat/Chat';
import rootReducer from '../../reducers';
import convertInitialState from './_helpers';
import UsernameContext from '../../UsernameContext';

const initState = convertInitialState(window.gon);
const isUsernameExist = Boolean(Cookies.get('username'));
if (!isUsernameExist) {
  const randomName = faker.name.findName();
  Cookies.set('username', randomName);
}
const username = Cookies.get('username');

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  initState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export default () => {
  ReactDOM.render(
    <Provider store={store}>
      <UsernameContext.Provider value={{ username }}>
        <Container fluid>
          <Row>
            <Col xs={3}>
              <Channels />
            </Col>
            <Col style={{ height: '100vh' }}>
              <Chat />
            </Col>
          </Row>
        </Container>
      </UsernameContext.Provider>
    </Provider>,
    document.getElementById('app'),
  );
};
