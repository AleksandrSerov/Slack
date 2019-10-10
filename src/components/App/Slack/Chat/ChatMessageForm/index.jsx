import React, { Component } from 'react';
import { Field } from 'redux-form';
import connect from '../../../../../connect';
import withReduxForm from '../../../../../reduxForm';
import UsernameContext from '../../../../../UsernameContext';

@connect()
@withReduxForm('ChatMessage')
class ChatMessageForm extends Component {
  static contextType = UsernameContext;

  handleSubmit = async (data) => {
    const { text } = data;
    const { actions, reset } = this.props;
    const { username } = this.context;
    try {
      await actions.sendMessage({ text: String(text), username });
    } catch (error) {
      throw error;
    }
    reset();
  };

  render() {
    const { handleSubmit, submitting, pristine } = this.props;

    return (
      <form
        className="form-inline pt-3"
        id="mainForm"
        onSubmit={handleSubmit(this.handleSubmit)}
      >
        <Field
          name="text"
          required
          component="input"
          type="text"
          className="form-control border-right-0 w-50"
          placeholder="Enter message"
        />
        <button
          className="btn btn-primary border-left-0"
          type="submit"
          disabled={pristine || submitting}
        >
          {submitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    );
  }
}

export default ChatMessageForm;
