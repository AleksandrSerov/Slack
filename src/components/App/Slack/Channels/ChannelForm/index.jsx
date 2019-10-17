import React, { Component } from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';
import { Field } from 'redux-form';
import withReduxForm from '../../../../../decorators/reduxForm';
import withTranslation from '../../../../../decorators/translation';
import connect from '../../../../../decorators/connect';

@connect()
@withReduxForm('channelForm')
@withTranslation()
class ChannelForm extends Component {
  handleSubmit = async (data) => {
    const { name } = data;
    const { actions, reset } = this.props;
    try {
      await actions.createChannel({ name: String(name) });
    } catch (error) {
      throw new Error('Error while creating channel', error);
    }
    reset();
  };

  render() {
    const { handleSubmit, submitting, pristine, t } = this.props;

    return (
      <Form id="channelForm" onSubmit={handleSubmit(this.handleSubmit)} inline>
        <InputGroup className="w-100 py-3">
          <Field
            required
            name="name"
            component="input"
            type="text"
            className="form-control border-right-0"
            placeholder={t('enterChannelName')}
          />
          <InputGroup.Append>
            <Button type="submit" disabled={pristine || submitting}>
              {submitting ? t('adding') : t('add')}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

export default ChannelForm;
