import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Modal, Button, Form } from 'react-bootstrap';
import connect from '../../../connect';
import withReduxForm from '../../../reduxForm';
import RemoveChannelButton from './RemoveChannelButton';

const mapStatetoProps = (state) => {
  const props = {
    isShowModal: state.modals.removeChannel.isShow,
    removingChannelId: state.removingChannelId,
  };
  return props;
};
@connect(mapStatetoProps)
@withReduxForm('removeChannelForm')
class RemoveChannelModal extends Component {
  handleRemoveChannel = async () => {
    const { actions, removingChannelId } = this.props;
    try {
      await actions.removeChannel({ id: removingChannelId });
    } catch (error) {
      throw new Error('Error while removing channel', error);
    }
    actions.clearRemovingChannelId();
  };

  handleClose = () => {
    const { actions } = this.props;

    actions.clearRemovingChannelId();
  };

  render() {
    const { isShowModal, handleSubmit } = this.props;

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
          <Form
            id="removeChannel"
            onSubmit={handleSubmit(this.handleRemoveChannel)}
          >
            <Field name="submit" component={RemoveChannelButton} />
          </Form>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RemoveChannelModal;
