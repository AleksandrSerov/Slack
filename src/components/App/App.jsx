import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import Channels from '../Channels/Channels';
import Chat from '../Chat/Chat';
import rootReducer from '../../reducers';

const initState = window.gon;
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default () => {
  ReactDOM.render(
    <Provider store={store}>
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
    </Provider>,
    document.getElementById('app'),
  );
};
