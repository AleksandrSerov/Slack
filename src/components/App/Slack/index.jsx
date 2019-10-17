import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Channels from './Channels';
import Chat from './Chat';

const Slack = () => (
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

export default Slack;
