import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import io from 'socket.io-client';
import Channels from './Channels';
import Chat from './Chat';
import connect from '../../../decorators/connect';

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
      const { attributes: message } = data;
      actions.addMessage({ message });
    });
    socket.on('newChannel', ({ data }) => {
      const { attributes: channel } = data;
      actions.addChannel({ channel });
    });
    socket.on('removeChannel', ({ data }) => {
      const { currentChannelId, channels, messages } = this.props;
      const { id } = data;
      actions.removeChannelFromStore({ id, messages });
      if (currentChannelId !== id) {
        return;
      }
      const [firstChannelId] = channels.allIds;
      actions.setCurrentChannelId({
        id: firstChannelId,
      });
    });
    socket.on('renameChannel', ({ data }) => {
      const { attributes: channel } = data;
      actions.updateChannel({ channel });
    });
  }

  render() {
    return (
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
    );
  }
}

export default Slack;
