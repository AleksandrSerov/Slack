import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RemoveChannelModal from './Modals/RemoveChannelModal';
import RenameChannelModal from './Modals/RenameChannelModal';
import ErrorModal from './Modals/ErrorModal';
import Channels from './Channels';
import Chat from './Chat';

const App = () => (
  <>
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
    <RemoveChannelModal />
    <RenameChannelModal />
    <ErrorModal />
  </>
);

export default App;
