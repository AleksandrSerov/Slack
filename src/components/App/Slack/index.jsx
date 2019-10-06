import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import io from 'socket.io-client';
import Channels from './Channels';
import Chat from './Chat';
import connect from '../../../connect';

@connect(() => ({}))
class Slack extends Component {
  componentDidMount() {
    const socket = io();
    socket.on('newMessage', ({ data }) => {
      const { actions } = this.props;
      const { attributes } = data;
      actions.addMessage({ attributes });
    });
  }

  render() {
    return (
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
    );
  }
}

export default Slack;
