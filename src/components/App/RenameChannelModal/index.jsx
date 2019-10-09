import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Field } from 'redux-form';
import connect from '../../../connect';
import withReduxForm from '../../../reduxForm';

const mapStatetoProps = (state) => {
  const props = {
    isShowModal: state.modals.renameChannel.isShow,
    renameChannelId: state.renamingChannelId,
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
      await actions.renameChannel({ id: renameChannelId, name });
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
    const { isShowModal, handleSubmit } = this.props;

    return (
      <Modal show={isShowModal} onHide={this.handleClose}>
        <form
          id="renameChannel"
          onSubmit={handleSubmit(this.handleRenameChannel)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Rename channel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are your sure rename channel?
            <Field
              name="name"
              required
              component="input"
              type="text"
              className="form-control"
              placeholder="Enter new channel name"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={this.handleRenameChannel}
              type="submit"
            >
              Rename channel
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default RenameChannelModal;
