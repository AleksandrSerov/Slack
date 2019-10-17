import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import connect from '../../../../decorators/connect';
import withTranslation from '../../../../decorators/translation';

const mapStateToProps = (state) => ({
  errorModal: state.modals.errorModal,
});
@connect(mapStateToProps)
@withTranslation()
class ErrorModal extends Component {
  handleCloseModal = () => {
    const { actions } = this.props;

    actions.closeErrorModal();
  };

  render() {
    const {
      errorModal: { isShow, errorType },
      t,
    } = this.props;

    return (
      isShow && (
        <Alert variant="danger" className="fixed-bottom">
          {t('errorMessage')}
          :
          {' '}
          <span>{`${errorType}`}</span>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.handleCloseModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Alert>
      )
    );
  }
}

export default ErrorModal;
