import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import connect from '../../connect';

@connect((state) => ({
  channels: state.channels,
  currentChannelId: state.currentChannelId,
}))
class Channels extends Component {
  renderChannels = () => {
    const { channels, currentChannelId } = this.props;

    const isEmptyChannels = !channels.length;
    if (isEmptyChannels) {
      return null;
    }

    return channels.map(({ name, id }) => (
      <ListGroup.Item
        action
        key={id}
        active={id === currentChannelId}
        onClick={this.handleChannelClick(id)}
      >
        {name}
      </ListGroup.Item>
    ));
  };

  handleChannelClick = (id) => () => {
    const { actions } = this.props;

    actions.setCurrentChannelId({ id });
  };

  render() {
    return <ListGroup>{this.renderChannels()}</ListGroup>;
  }
}

export default Channels;
