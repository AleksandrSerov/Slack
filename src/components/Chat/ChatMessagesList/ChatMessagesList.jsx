import React, { Component } from 'react';
import connect from '../../../connect';
import UsernameContext from '../../../UsernameContext';

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
  static contextType = UsernameContext;

  renderMessages = () => {
    const { messages } = this.props;
    const { username } = this.context;
    return messages.map(({ id, text }) => (
      <div key={id}>{`${username}: ${text}`}</div>
    ));
  };

  render() {
    return <div>{this.renderMessages()}</div>;
  }
}

export default ChatMessagesList;
