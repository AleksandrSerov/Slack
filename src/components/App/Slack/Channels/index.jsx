import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import ChannelForm from './ChannelForm';
import connect from '../../../../connect';

const mapStateToProps = (state) => ({
  channels: state.channels.allIds.map((id) => state.channels.byId[id]),
  currentChannelId: state.currentChannelId,
});
@connect(mapStateToProps)
class Channels extends Component {
  handleRemoveChannelButtonClick = (id) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { actions } = this.props;
    actions.setRemovingChannelId({ id });
  };

  handleSetCurrentChannelButtonClick = (id) => (e) => {
    e.preventDefault();
    const { actions } = this.props;
    actions.setCurrentChannelId({ id });
  };

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
        onClick={this.handleSetCurrentChannelButtonClick(id)}
        as="div"
      >
        <span>{`#${name}`}</span>
        {removable && (
          <>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.handleRemoveChannelButtonClick(id)}
            >
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
