import axios from "axios";

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    headers : {"Content-Type" : "application/json"}

});

api.interceptors.response.use(function(config){
    console.log("request start", config);
    return config;
},function(error){
    console.log("request err", error);
    return Promise.reject(error);
});