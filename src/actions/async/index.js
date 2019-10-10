import axios from 'axios';
import * as actions from '../sync';
import routes from '../../routes';

export const sendMessage = (data) => async (dispatch, getState) => {
  const { currentChannelId } = getState();
  dispatch(actions.sendMessageRequest());
  try {
    await axios.post(routes.channelMessagesPath(currentChannelId), {
      data: {
        attributes: data,
      },
    });
    dispatch(actions.sendMessageSuccess());
  } catch (error) {
    dispatch(actions.sendMessageFailure());
    throw error;
  }
};

export const createChannel = (data) => async (dispatch) => {
  const { name } = data;
  dispatch(actions.createChannelRequest());
  try {
    await axios.post(routes.channelPath(), {
      data: {
        attributes: {
          name,
        },
      },
    });
    dispatch(actions.createChannelSuccess());
  } catch (error) {
    dispatch(actions.createChannelFailure());
    throw new Error('Error while creating channel', error);
  }
};

export const removeChannel = (data) => async (dispatch) => {
  const { id } = data;
  dispatch(actions.removeChannelRequest());
  try {
    await axios.delete(routes.channelPath(id), {
      data: {
        attributes: {
          id,
        },
      },
    });
    dispatch(actions.removeChannelSuccess());
  } catch (error) {
    dispatch(actions.removeChannelFailure());
    throw new Error('Error while removing channel', error);
  }
};

export const renameChannel = (data) => async (dispatch) => {
  const { id, name } = data;
  dispatch(actions.renameChannelRequest());
  try {
    await axios.patch(routes.channelPath(id), {
      data: {
        attributes: {
          name,
        },
      },
    });
    dispatch(actions.renameChannelSuccess());
  } catch (error) {
    dispatch(actions.renameChannelFailure());
    throw new Error('Error renaming removing channel', error);
  }
};
