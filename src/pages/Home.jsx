import React, { useEffect } from 'react'
import { movieAction } from '../redux/action/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies , topRatedMovies , upcomingMovies, loading} = useSelector(state=>state.movie);
  console.log("home", popularMovies);
  
  useEffect(()=>{
    dispatch(movieAction.getMovies());
},[]);

// loading 이 true(데이터 도착 전) : 로딩스피너 / false(데이터 도착 후 or 에러) : 데이터 보여주기 
  if(loading){
    return  <ClipLoader className='loading' color="#999999" loading={loading} size={150} />
  }


  return (
    <div>

      {/* 조건부 렌더링 ( 값이 있으면 보여주기) 
      -> loading 스피너를 사용해서 조건부 렌더링 기능을 해주고 있기 때문에 조건부 렌더링 사용 안해도 됨 */}
      {/* {popularMovies.results&& <Banner movie = {popularMovies.results[0]}/>} */}
      <Banner movie = {popularMovies.results[0]}/>

      {/* 슬라이드 기능은 같지만 데이터는 다르게 props 로 보내줌 */}
      <h2>PopularMovie</h2>
      <MovieSlide movies ={popularMovies}/>
      <h2>TopRatedMovie</h2>
      <MovieSlide movies = {topRatedMovies}/>
      <h2>UpcomingMovie</h2>
      <MovieSlide movies ={upcomingMovies}/>

    </div>
  )
}

export default Home