
import { combineReducers } from 'redux';
import logged from './header';
import placeList from './placeList';

const appReducer = combineReducers({
    placeList: placeList,
    logged: logged,
})

export default appReducer;