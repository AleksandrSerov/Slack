import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import withTranslation from '../../../../../decorators/translation';

@withTranslation()
class RemoveChannelButton extends Component {
  render() {
    const {
      meta: { submitting },
      t,
    } = this.props;

    return (
      <Button type="submit" disabled={submitting}>
        {submitting ? t('removing') : t('remove')}
      </Button>
    );
  }
}

export default RemoveChannelButton;
