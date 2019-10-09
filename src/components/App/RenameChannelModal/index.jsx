import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import connect from '../../../connect';
import withReduxForm from '../../../reduxForm';

const mapStatetoProps = (state) => {
  const props = {
    isShowModal: state.modals.renameChannel.isShow,
    renameChannelId: state.renameChannelId,
  };
  return props;
};
@connect(mapStatetoProps)
@withReduxForm('RenameChannel')
class RenameChannelModal extends Component {
  handleRenameChannel = async (data) => {
    const { actions, renameChannelId } = this.props;
    const { name } = data;
    try {
      await actions.removeChannel({ id: renameChannelId, name });
    } catch (error) {
      console.error(error);
    }
    actions.clearRenamingChannelId();
  };

  handleClose = () => {
    const { actions } = this.props;

    actions.clearRenamingChannelId();
  };

  render() {
    const { isShowModal } = this.props;
    return (
      <Modal show={isShowModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rename channel</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your sure rename channel?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.handleRenameChannel}>
            Rename channel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RenameChannelModal;
