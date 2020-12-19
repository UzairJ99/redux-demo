import {combineReducers} from 'redux';
import postReducer from './postReducer';

// object of reducers
export default combineReducers({
    posts: postReducer
});