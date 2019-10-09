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

export const createChannel = ({ name }) => async (dispatch, getState) => {
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
    throw error;
  }
};

export const removeChannel = ({ id }) => async (dispatch, getState) => {
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
    throw error;
  }
};
