import React, { Component } from 'react';
import ChatMessageForm from './ChatMessageForm/ChatMessageForm';

// eslint-disable-next-line react/prefer-stateless-function
export default class Chat extends Component {
  render() {
    return (
      <>
        <div className="chatWindow" style={{ height: '80%' }}>
          messages
        </div>
        <ChatMessageForm />
      </>
    );
  }
}
