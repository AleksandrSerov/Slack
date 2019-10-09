import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import connect from '../../../connect';

const mapStatetoProps = (state) => {
  const props = {
    isShowModal: state.modals.removeChannel.isShow,
  };
  return props;
};
@connect(mapStatetoProps)
class RemoveChannelModal extends Component {
  handleRemoveChannel = async () => {
    const { actions } = this.props;
    try {
      await actions.removeChannel();
    } catch (error) {}
    actions.closeRemoveChannelModal();
  };

  handleClose = () => {
    const { actions } = this.props;

    actions.closeRemoveChannelModal();
  };

  render() {
    const { isShowModal } = this.props;

    return (
      <Modal show={isShowModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Removing channel</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your sure remove channel?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.handleRemoveChannel}>
            Remove channel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RemoveChannelModal;
