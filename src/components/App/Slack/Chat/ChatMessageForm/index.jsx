import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../../../../../connect';
import UsernameContext from '../../../../../UsernameContext';

@connect(() => ({}))
class ChatMessageForm extends Component {
  static contextType = UsernameContext;

  handleSubmit = (data) => {
    const { text } = data;
    const { actions, reset } = this.props;
    const { username } = this.context;

    actions.sendMessage({ text: String(text), username });
    reset();
  };

  render() {
    const { handleSubmit } = this.props;
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
            id="searchButton"
            type="submit"
          >
            Read
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'ChatMessage',
})(ChatMessageForm);
