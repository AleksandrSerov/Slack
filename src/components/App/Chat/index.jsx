import React from 'react';
import ChatMessageForm from './ChatMessageForm';
import ChatMessagesList from './ChatMessagesList';

const Chat = () => (
  <div className="vh-100">
    <div className="h-75 py-3">
      <ChatMessagesList />
    </div>
    <ChatMessageForm />
  </div>
);

export default Chat;
