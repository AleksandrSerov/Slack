import React, { Component } from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';
import { Field } from 'redux-form';
import withReduxForm from '../../../../../reduxForm';
import connect from '../../../../../connect';

@connect()
@withReduxForm('ChannelForm')
class ChannelForm extends Component {
  handleSubmit = async (data) => {
    const { name } = data;
    const { actions, reset } = this.props;
    try {
      await actions.createChannel({ name: String(name) });
    } catch (error) {
      throw error;
    }
    reset();
  };

  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    return (
      <Form
        id="channelForm"
        onSubmit={handleSubmit(this.handleSubmit)}
        className="mb-3 mt-3"
        inline
      >
        <InputGroup>
          <Field
            required
            name="name"
            component="input"
            type="text"
            className="form-control border-right-0"
            placeholder="Enter channel name"
          />
          <InputGroup.Append>
            <Button type="submit" disabled={pristine || submitting}>
              {submitting ? 'Adding...' : 'Add'}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

export default ChannelForm;
