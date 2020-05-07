import axios from 'axios';
import * as actions from '../sync';
import routes from '../../routes';

export const sendMessage = (data) => async (dispatch, getState) => {
  const { currentChannelId } = getState();
  try {
    await axios.post(routes.channelMessagesPath(currentChannelId), {
      data: {
        attributes: data,
      },
    });
    dispatch(actions.sendMessageSuccess());
  } catch (error) {
    throw new Error(`Error while sending message ${error}`);
  }
};

export const createChannel = (data) => async (dispatch) => {
  const { name } = data;
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
    throw new Error(`Error while creating channel ${error}`);
  }
};

export const removeChannel = (data) => async (dispatch) => {
  const { id } = data;
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
    throw new Error(`Error while removing channel ${error}`);
  }
};

export const renameChannel = (data) => async (dispatch) => {
  const { id, name } = data;
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
    throw new Error(`Error renaming removing channel ${error}`);
  }
};
