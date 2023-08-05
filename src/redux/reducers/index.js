import {combineReducers}from 'redux';
import movieReducer from './movieReducer';

export default combineReducers({
    move:movieReducer, //-> combineReducers 를 통해 store한테 리듀서 전달
})
