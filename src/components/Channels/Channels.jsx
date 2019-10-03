import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

class Channels extends Component {
  renderChannels = () => {
    const { channels } = this.props;

    const isEmptyChannels = !channels.length;
    if (isEmptyChannels) {
      return null;
    }

    return channels.map(({ name, id }) => (
      <ListGroup.Item key={id}>{name}</ListGroup.Item>
    ));
  };

  render() {
    return <ListGroup>{this.renderChannels()}</ListGroup>;
  }
}
const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
  };
  return props;
};
export default connect(mapStateToProps)(Channels);
