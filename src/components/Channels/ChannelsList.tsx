import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ListGroup} from 'react-bootstrap';
import actions from '../../actions';

const handleRemoveChannelButtonClick = (id, dispatch) => (e) => {
  e.preventDefault();
  e.stopPropagation();

  dispatch(actions.setRemovingChannelId({ id }))
};

const handleRenameChannelButtonClick = (id, dispatch) => (e) => {
  e.preventDefault();
  e.stopPropagation();
  dispatch(actions.setRenamingChannelId({ id }));
};

const handleSetCurrentChannelButtonClick = (id, dispatch) => (e) => {
  e.preventDefault();
  dispatch(actions.setCurrentChannelId({ id }));
};

const renderChannels = (channels, currentChannelId, dispatch) => {
  const isEmptyChannels = !channels.length;
  if (isEmptyChannels) {
    return null;
  }

  return channels.map(({ name, id, removable }) => (
    <ListGroup.Item
      action
      key={id}
      active={id === currentChannelId}
      onClick={handleSetCurrentChannelButtonClick(id, dispatch)}
      as="div"
    >
      <span>{`#${name}`}</span>
      {removable && (
        <>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={handleRemoveChannelButtonClick(id, dispatch)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <button
            type="button"
            className="close"
            aria-label="Rename"
            onClick={handleRenameChannelButtonClick(id, dispatch)}
          >
            <span aria-hidden="true">&#9998;</span>
          </button>
        </>
      )}
    </ListGroup.Item>
  ));
};

const ChannelsList = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels.allIds.map((id) => state.channels.byId[id]));
  const currentChannelId = useSelector((state) => state.currentChannelId);
 
  return <ListGroup>{renderChannels(channels, currentChannelId, dispatch)}</ListGroup>
}

export default ChannelsList;
