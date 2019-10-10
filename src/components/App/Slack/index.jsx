import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import io from 'socket.io-client';
import Channels from './Channels';
import Chat from './Chat';
import connect from '../../../connect';

const mapStateToProps = (state) => ({
  currentChannelId: state.currentChannelId,
  channels: state.channels,
  messages: state.messages,
});
@connect(mapStateToProps)
class Slack extends Component {
  componentDidMount() {
    const { actions } = this.props;
    const socket = io();
    socket.on('newMessage', ({ data }) => {
      const { attributes } = data;
      actions.addMessage({ attributes });
    });
    socket.on('newChannel', ({ data }) => {
      const { attributes } = data;
      actions.addChannel({ attributes });
    });
    socket.on('removeChannel', ({ data }) => {
      const { currentChannelId, channels, messages } = this.props;
      const { id } = data;
      actions.removeChannelFromStore({ id, messages });
      if (currentChannelId === id) {
        const [newCurrentChannelId] = channels.allIds;
        actions.setCurrentChannelId({
          id: newCurrentChannelId,
        });
      }
    });
    socket.on('renameChannel', ({ data }) => {
      const { attributes } = data;

      actions.updateChannel({ attributes });
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
