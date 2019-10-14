import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import startSocketMessaging from '../../../socket';
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

    startSocketMessaging(actions);
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
