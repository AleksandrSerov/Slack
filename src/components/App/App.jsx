import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import Channels from '../Channels/Channels';
import rootReducer from '../../reducers';
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const Chat = () => <div>hello world1</div>;

export default () => {
  ReactDOM.render(
    <Provider store={store}>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Channels />
          </Col>
          <Col>
            <Chat />
          </Col>
        </Row>
      </Container>
    </Provider>,
    document.getElementById('app'),
  );
};
