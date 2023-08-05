import { createStore, applyMiddleware } from "redux";
//리덕스 미들웨어 사용 
import thunk from "redux-thunk";
//리덕스 디벨로퍼 툴
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers'


let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));


    export default store;
