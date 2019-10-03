import * as actions from '../sync';

export const sendMessage = (data) => async (dispatch, getState) => {
  const { currentChannelId } = getState();
  dispatch(actions.sendMessageRequest);
  try {
  } catch (error) {
    console.log(error);
    dispatch(action.sendMessageFailure);
  }
};
