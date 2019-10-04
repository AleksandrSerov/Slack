import axios from 'axios';
import * as actions from '../sync';
import routes from '../../routes';

// eslint-disable-next-line import/prefer-default-export
export const sendMessage = (data) => async (dispatch, getState) => {
  const { currentChannelId } = getState();
  dispatch(actions.sendMessageRequest());
  try {
    const response = await axios.post(
      routes.channelMessagesPath(currentChannelId),
      {
        data: {
          attributes: data,
        },
      },
    );
    const { attributes } = response.data.data;
    dispatch(actions.sendMessageSuccess());
    dispatch(actions.addMessage({ attributes }));
  } catch (error) {
    dispatch(actions.sendMessageFailure());
  }
};
