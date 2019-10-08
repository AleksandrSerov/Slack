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
    const response = await axios.post(routes.channelPath(), {
      data: {
        attributes: {
          name,
        },
      },
    });
    const {
      data: {
        data: { attributes },
      },
    } = response;
    dispatch(actions.createChannelSuccess());
    dispatch(actions.addChannel({ attributes }));
  } catch (error) {
    dispatch(actions.createChannelFailure());
    throw error;
  }
};
