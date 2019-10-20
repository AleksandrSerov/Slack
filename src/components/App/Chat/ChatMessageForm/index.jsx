import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button, Form, InputGroup } from 'react-bootstrap';
import connect from '../../../../decorators/connect';
import withTranslate from '../../../../decorators/translation';
import withReduxForm from '../../../../decorators/reduxForm';
import userNameContext from '../../../../usernameContext';

@connect()
@withReduxForm('chatMessageForm')
@withTranslate()
class ChatMessageForm extends Component {
  static contextType = userNameContext;

  handleSendMessage = async (data) => {
    const { actions, reset } = this.props;
    const { text } = data;
    const { username } = this.context;
    try {
      await actions.sendMessage({ text: String(text), username });
    } catch (error) {
      throw new Error('Error while sending message', error);
    }
    reset();
  };

  render() {
    const { handleSubmit, submitting, pristine, t } = this.props;
    return (
      <Form
        className="form-inline mt-2"
        id="mainForm"
        onSubmit={handleSubmit(this.handleSendMessage)}
      >
        <InputGroup className="w-100">
          <Field
            name="text"
            required
            component="input"
            type="text"
            className="form-control border-right-0"
            placeholder={t('enterMessage')}
          />
          <InputGroup.Append>
            <Button
              className="btn btn-primary border-left-0"
              type="submit"
              disabled={pristine || submitting}
            >
              {submitting ? t('sending') : t('send')}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

export default ChatMessageForm;
