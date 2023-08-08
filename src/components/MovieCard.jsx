import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'


const MovieCard = ({item}) => {

  const {genreList} = useSelector(state=>state.movie)


  return (
    <div className='movieCard' style={{backgroundImage:"url(" +`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+")", }}>
        <div className='overlay'>
            <h4>{item.title}</h4>
            {/* genreList 안에 id 와 같은 장르 이름 찾아서 가져옴 : find : Array 안에서 찾는걸 도와줌 */}
            <div>{item.genre_ids.map ((id,index)=><Badge bg = "danger" key={index}c className='genre'> {genreList.find((item) => item.id == id).name} </Badge>)}</div>

            <div>
                <span>평점 : {item.vote_average}</span>
                <span>{item.adult? " 청불":" Under 18"}</span>
            </div>
        </div>
    
    </div>
  )
}

export default MovieCard