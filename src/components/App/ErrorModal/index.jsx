import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import connect from '../../../connect';

const mapStateToProps = (state) => ({
  errorModal: state.modals.errorModal,
});
@connect(mapStateToProps)
class ErrorModal extends Component {
  handleCloseModal = () => {
    const { actions } = this.props;

    actions.closeErrorModal();
  };

  render() {
    const {
      errorModal: { isShow, errorType },
    } = this.props;

    return (
      isShow && (
        <Alert variant="danger" className="fixed-bottom">
          Something went wrong, error: 
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
