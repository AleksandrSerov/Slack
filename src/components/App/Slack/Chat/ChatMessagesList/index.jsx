import React, { Component } from 'react';
import connect from '../../../../../connect';

const mapStateToProps = (state) => {
  const { messages, currentChannelId } = state;

  const props = {
    messages: messages.allIds
      .map((id) => state.messages.byId[id])
      .filter(({ channelId }) => channelId === currentChannelId),
  };
  return props;
};

@connect(mapStateToProps)
class ChatMessagesList extends Component {
  renderMessages = () => {
    const { messages } = this.props;
    return messages.map(({ id, text, username }) => (
      <div key={id}>{`${username}: ${text}`}</div>
    ));
  };

  render() {
    return <div>{this.renderMessages()}</div>;
  }
}

export default ChatMessagesList;