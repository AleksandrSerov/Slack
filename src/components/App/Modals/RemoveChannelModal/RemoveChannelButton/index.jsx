import React from 'react';
import { Button } from 'react-bootstrap';

const RemoveChannelButton = ({ meta: { submitting } }) => (
  <Button type="submit" disabled={submitting}>
    {submitting ? 'Removing...' : 'Remove'}
  </Button>
);

export default RemoveChannelButton;
