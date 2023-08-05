import axios from "axios";

//기본 베이스되는 URL 지정 
const api = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    headers : {"Content-Type" : "application/json"}

});


//req
api.interceptors.request.use(function(config){
    console.log("request start", config);
    return config;
},
function(error){
    console.log("request err", error);
    return Promise.reject(error);
});
//res -> axios 사용하면 data 라는 필드 안에 받은 응답을 넣어줌 
api.interceptors.response.use(function(response){
    console.log("get response", response);
    return response;
},
function(error){
    console.log("response err", error);
    return Promise.reject(error);
});



export default api