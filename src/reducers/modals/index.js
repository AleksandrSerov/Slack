import { combineReducers } from 'redux';
import removeChannel from './removeChannel';

const modals = combineReducers({ removeChannel });

export default modals;
