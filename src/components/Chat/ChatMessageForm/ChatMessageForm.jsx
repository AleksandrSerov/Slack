import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../../../connect';

@connect(() => ({}))
class ChatMessageForm extends Component {
  handleSubmit = (data) => {
    const { text } = data;
    const { actions, reset } = this.props;

    actions.sendMessage({ text });
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

// let ContactForm = props => {
//     const { handleSubmit } = props
//     return <form onSubmit={handleSubmit}>{/* form body*/}</form>
//   }

//   ContactForm = reduxForm({
//     // a unique name for the form
//     form: 'contact'
//   })(ContactForm)

//   export default ContactForm
