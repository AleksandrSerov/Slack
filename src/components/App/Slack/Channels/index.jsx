import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import ChannelForm from './ChannelForm';
import connect from '../../../../connect';

@connect((state) => ({
  channels: state.channels.allIds.map((id) => state.channels.byId[id]),
  currentChannelId: state.currentChannelId,
}))
class Channels extends Component {
  renderChannels = () => {
    const { channels, currentChannelId } = this.props;
    const isEmptyChannels = !channels.length;
    if (isEmptyChannels) {
      return null;
    }

    return channels.map(({ name, id, removable }) => (
      <ListGroup.Item
        action
        key={id}
        active={id === currentChannelId}
        onClick={this.handleChannelClick(id)}
        as="div"
      >
        <span>{`#${name}`}</span>
        {removable && (
          <>
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <button type="button" className="close" aria-label="Edit">
              <span aria-hidden="true">&#9998;</span>
            </button>
          </>
        )}
      </ListGroup.Item>
    ));
  };

  handleChannelClick = (id) => () => {
    const { actions } = this.props;

    actions.setCurrentChannelId({ id });
  };

  render() {
    return (
      <>
        <ChannelForm />
        <ListGroup>{this.renderChannels()}</ListGroup>
      </>
    );
  }
}

export default Channels;
