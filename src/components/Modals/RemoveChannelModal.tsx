import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Modal, Button, Form } from 'react-bootstrap';
import connect from '../../decorators/connect';
import withTranslation from '../../decorators/translation';
import withReduxForm from '../../decorators/reduxForm';

const RemoveChannelButton = ({ meta: { submitting }, t }) => (
  <Button type="submit" disabled={submitting}>
    {submitting ? t('removing') : t('remove')}
  </Button>
);
const mapStatetoProps = (state) => {
  const props = {
    isShowModal: state.modals.removeChannel.isShow,
    removingChannelId: state.removingChannelId,
  };
  return props;
};
@connect(mapStatetoProps)
@withReduxForm('removeChannelForm')
@withTranslation()
class RemoveChannelModal extends Component<any> {
  handleRemoveChannel = async () => {
    const { actions, removingChannelId } = this.props;
    try {
      await actions.removeChannel({ id: removingChannelId });
    } catch (error) {
      actions.removeChannelFailure();
      throw new Error(`Error while removing channel, ${error}`);
    }
    actions.clearRemovingChannelId();
  };

  handleClose = () => {
    const { actions } = this.props;

    actions.clearRemovingChannelId();
  };

  render() {
    const { isShowModal, handleSubmit, t } = this.props;

    return (
      <Modal show={isShowModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t('removeChannel')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('areYouSure')}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            {t('cancel')}
          </Button>
          <Form
            id="removeChannel"
            onSubmit={handleSubmit(this.handleRemoveChannel)}
          >
            <Field
              name="submit"
              component={RemoveChannelButton}
              props={{ t }}
            />
          </Form>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RemoveChannelModal;
