import {combineReducers} from 'redux';
import theme from './ThemeReducer';
import user from './UserReducer';

const rootReducer = combineReducers({theme, user});

export default rootReducer;
