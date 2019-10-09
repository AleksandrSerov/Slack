import { combineReducers } from 'redux';
import removeChannel from './removeChannel';
import renameChannel from './renameChannel';

const modals = combineReducers({ removeChannel, renameChannel });

export default modals;
