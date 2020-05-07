import React from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';
import { Field } from 'redux-form';
import connect from '../../decorators/connect';
import withReduxForm from '../../decorators/reduxForm';
import { withTranslation } from 'react-i18next';

@connect()
@withReduxForm('channelForm')
class ChannelsForm extends React.Component<any> {
    handleSubmit = async (data) => {
        const { name } = data;
        const { actions, reset } = this.props;
        try {
            await actions.createChannel({ name: String(name) });
        } catch (error) {
            actions.createChannelFailure();
            throw new Error(`Error while creating channel ${error}`);
        }
        reset();
    };
    render() {
        const { t, submitting, pristine, handleSubmit } = this.props;

        return (
            <Form
                id="channelForm"
                onSubmit={handleSubmit(this.handleSubmit)}
                inline
            >
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
        )
    }
}

export default withTranslation()(ChannelsForm);