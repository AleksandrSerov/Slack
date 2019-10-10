import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button, Form, InputGroup } from 'react-bootstrap';
import connect from '../../../../../connect';
import withReduxForm from '../../../../../reduxForm';
import UsernameContext from '../../../../../UsernameContext';

@connect()
@withReduxForm('chatMessageForm')
class ChatMessageForm extends Component {
  static contextType = UsernameContext;

  handleSendMessage = async (data) => {
    const { text } = data;
    const { actions, reset } = this.props;
    const { username } = this.context;
    try {
      await actions.sendMessage({ text: String(text), username });
    } catch (error) {
      throw new Error('Error while sending message', error);
    }
    reset();
  };

  render() {
    const { handleSubmit, submitting, pristine } = this.props;

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
            placeholder="Enter message"
          />
          <InputGroup.Append>
            <Button
              className="btn btn-primary border-left-0"
              type="submit"
              disabled={pristine || submitting}
            >
              {submitting ? 'Sending...' : 'Send'}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

export default ChatMessageForm;
