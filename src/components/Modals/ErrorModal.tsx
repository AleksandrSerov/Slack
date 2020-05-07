import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../actions';

const ErrorModal = () => {
    const [t] = useTranslation();
    const {isShow, errorType} = useSelector((state) => state.modals.errorModal);
    const dispatch = useDispatch();
    
    return (
      isShow && (
        <Alert variant="danger" className="fixed-bottom">
          {t('errorMessage')}
          : 
          <span>{`${errorType}`}</span>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => dispatch(actions.closeErrorModal)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Alert>
      )
    );
}

export default ErrorModal;
