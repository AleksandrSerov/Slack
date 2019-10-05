import React, { Component } from 'react';
import ChatMessageForm from './ChatMessageForm/ChatMessageForm';
import ChatMessagesList from './ChatMessagesList/ChatMessagesList';

// eslint-disable-next-line react/prefer-stateless-function
export default class Chat extends Component {
  render() {
    return (
      <>
        <ChatMessagesList />
        <ChatMessageForm />
      </>
    );
  }
}
