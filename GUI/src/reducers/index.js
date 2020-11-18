import { combineReducers } from 'redux';
import messages from './messagesReducer';
import errors from './errors';
import alertReducer from './alertReducer';


export default combineReducers({
    errors,
    messages,
    alertReducer,
}); 