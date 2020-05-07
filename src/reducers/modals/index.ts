import { combineReducers } from 'redux';
import removeChannel from './removeChannel';
import renameChannel from './renameChannel';
import errorModal from './error';

const modals = combineReducers({ removeChannel, renameChannel, errorModal });

export default modals;
