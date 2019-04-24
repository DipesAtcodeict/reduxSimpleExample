import {combineReducers} from 'redux';
import nameReducers from './nameReducers';

export default combineReducers({
    name: nameReducers
});