import React, { Component } from 'react';
import { ListGroup, InputGroup, Button, Form } from 'react-bootstrap';
import { Field } from 'redux-form';
import connect from '../../../decorators/connect';
import withReduxForm from '../../../decorators/reduxForm';
import withTranslation from '../../../decorators/translation';

const mapStateToProps = (state) => ({
  channels: state.channels.allIds.map((id) => state.channels.byId[id]),
  currentChannelId: state.currentChannelId,
});
@connect(mapStateToProps)
@withReduxForm('channelForm')
@withTranslation()
class Channels extends Component {
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

  handleRemoveChannelButtonClick = (id) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { actions } = this.props;
    actions.setRemovingChannelId({ id });
  };

  handleRenameChannelButtonClick = (id) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { actions } = this.props;
    actions.setRenamingChannelId({ id });
  };

  handleSetCurrentChannelButtonClick = (id) => (e) => {
    e.preventDefault();
    const { actions } = this.props;
    actions.setCurrentChannelId({ id });
  };

  renderChannels = () => {
    const { channels, currentChannelId } = this.props;
    const isEmptyChannels = !channels.length;
    if (isEmptyChannels) {
      return null;
    }

    return channels.map(({ name, id, removable }) => (
      <ListGroup.Item
        action
        key={id}
        active={id === currentChannelId}
        onClick={this.handleSetCurrentChannelButtonClick(id)}
        as="div"
      >
        <span>{`#${name}`}</span>
        {removable && (
          <>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.handleRemoveChannelButtonClick(id)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <button
              type="button"
              className="close"
              aria-label="Rename"
              onClick={this.handleRenameChannelButtonClick(id)}
            >
              <span aria-hidden="true">&#9998;</span>
            </button>
          </>
        )}
      </ListGroup.Item>
    ));
  };

  render() {
    const { handleSubmit, submitting, pristine, t } = this.props;
    return (
      <>
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
        <ListGroup>{this.renderChannels()}</ListGroup>
      </>
    );
  }
}

export default Channels;
