// reducers/index.js or rootReducer.js
import { combineReducers } from 'redux';
import userDetails from './userDetails';

const rootReducer = combineReducers({
  user: userDetails,
});

export default rootReducer;
