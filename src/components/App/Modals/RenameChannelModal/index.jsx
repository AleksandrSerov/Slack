import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Field } from 'redux-form';
import connect from '../../../../decorators/connect';
import withTranslation from '../../../../decorators/translation';
import withReduxForm from '../../../../decorators/reduxForm';

const mapStatetoProps = (state) => {
  const props = {
    isShowModal: state.modals.renameChannel.isShow,
    renameChannelId: state.renamingChannelId,
  };
  return props;
};
@connect(mapStatetoProps)
@withReduxForm('renameChannelForm')
@withTranslation()
class RenameChannelModal extends Component {
  handleRenameChannel = async (data) => {
    const { actions, renameChannelId, reset } = this.props;
    const { name } = data;
    try {
      await actions.renameChannel({ id: renameChannelId, name: String(name) });
    } catch (error) {
      throw new Error('Error while renaming channel', error);
    }
    actions.clearRenamingChannelId();
    reset();
  };

  handleClose = () => {
    const { actions, reset } = this.props;

    actions.clearRenamingChannelId();
    reset();
  };

  render() {
    const { isShowModal, handleSubmit, submitting, pristine, t } = this.props;
    return (
      <Modal show={isShowModal} onHide={this.handleClose}>
        <form
          id="renameChannel"
          onSubmit={handleSubmit(this.handleRenameChannel)}
        >
          <Modal.Header closeButton>
            <Modal.Title>{t('renameChannel')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Field
              name="name"
              required
              component="input"
              type="text"
              className="form-control"
              placeholder={t('enterChannelName')}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              {t('cancel')}
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={submitting || pristine}
            >
              {submitting ? t('renaming') : t('rename')}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default RenameChannelModal;
