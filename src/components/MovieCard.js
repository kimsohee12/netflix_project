import React from 'react'
import { Badge } from 'react-bootstrap'

const MovieCard = ({item}) => {
  return (
    <div className='movieCard' style={{backgroundImage:"url(" +`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+")"}}>
        <div className='overlay'>
            <h3>{item.title}</h3>
            <div>{item.genre_ids.map ((id,index)=><Badge bg = "danger" key={index}> {id} </Badge>)}</div>

            <div>
                <span>평점 : {item.vote_average}</span>
                <span>{item.adult? " 청불":" Under 18"}</span>
            </div>
        </div>
    
    </div>
  )
}

export default MovieCard