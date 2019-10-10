import React from 'react';
import ChatMessageForm from './ChatMessageForm';
import ChatMessagesList from './ChatMessagesList';

const Chat = () => (
  <div className="vh-100">
    <div className="h-75 overflow-auto">
      <ChatMessagesList />
    </div>
    <div className="h-25">
      <ChatMessageForm />
    </div>
  </div>
);

export default Chat;
