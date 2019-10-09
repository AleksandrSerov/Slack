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
        className="form-inline col"
        id="mainForm"
        style={{ height: '20%' }}
        onSubmit={handleSubmit(this.handleSubmit)}
      >
        <div className="input-group col">
          <Field
            name="text"
            required
            component="input"
            type="text"
            className="form-control border-right-0"
            placeholder="Enter message"
          />
          <button
            className="btn btn-primary border-left-0"
            id="sendButton"
            type="submit"
            disabled={pristine || submitting}
          >
            {submitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    );
  }
}

export default ChatMessageForm;
