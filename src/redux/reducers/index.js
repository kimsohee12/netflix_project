import {combineReducers}from 'redux';
import movieReducer from './movieReducer';

export default combineReducers({
    movie:movieReducer, //-> combineReducers 를 통해 store한테 리듀서 전달
})
