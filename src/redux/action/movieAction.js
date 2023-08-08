import api from "../api"

const API_KEY = process.env.REACT_APP_API_KEY;
//영화정보 가져오기
const getMovies=()=>{

    return async(dispatch)=>{// 여러개의 데이터를 불러와야할 때 전부 await 으로 다 기다린 후에 불러오는게 아닌 동시에 불러오는 병렬처리
        //-->Promise.all([]) : promise 값들을 다 받을때 까지 기다린후 동시에 전부 가져옴 매개변수로 Array를 넣어줌
        //인기영화 
        try {
            dispatch({type : "GET_MOVIES_REQUEST"})
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            //평점 높은 영화
            const topRateApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            //개봉 예정 영화 
            const upCommingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    
            let [popularMovies , topRatedMovies , upcomingMovies,genreList] = await Promise.all([popularMovieApi,topRateApi,upCommingApi,genreApi]);
            console.log("promise 후에 받는 popularMovies :",popularMovies);
            console.log("promise 후에 받는 topRatedMovies :",topRatedMovies);
            console.log("promise 후에 받는 upcomingMovies :",upcomingMovies);
            console.log("promise 후에 받는 genreList :",genreList);
            
            dispatch({
                type : "GET_MOVIES_SUCCESS",
                payload : {
                    popularMovies : popularMovies.data,
                    topRatedMovies : topRatedMovies.data,
                    upcomingMovies : upcomingMovies.data,
                    genreList : genreList.data.genres
                    
                }//안에있는 data 필드만 보내줌
            });
        } catch (error) {
            dispatch({type : "GET_MOVIES_FAILURE"})
        }

    };

};

export const movieAction ={
    getMovies,

};
