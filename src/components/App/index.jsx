import React, { Component } from 'react';
import Slack from './Slack';
import RemoveChannelModal from './Modals/RemoveChannelModal';
import RenameChannelModal from './Modals/RenameChannelModal';
import ErrorModal from './Modals/ErrorModal';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <>
        <Slack />
        <RemoveChannelModal />
        <RenameChannelModal />
        <ErrorModal />
      </>
    );
  }
}
