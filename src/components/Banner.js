import React from 'react'

const Banner = ({movie}) => {
console.log("movie: ", `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}`);

  return (
    // url 전체가 String 으로 들어가야 함 
    <div className='banner' style={{backgroundImage : "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` + ")",
    }}>
        <div className='banner_info'>
            <h1>{movie.title}</h1>
            <br/>
            <h5>{movie.overview}</h5>
        </div>
    </div>
  )
}

export default Banner