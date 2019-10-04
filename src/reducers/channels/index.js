import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const byId = handleActions({}, {});
const allIds = handleActions({}, []);

const channels = combineReducers({ byId, allIds });

export default channels;
