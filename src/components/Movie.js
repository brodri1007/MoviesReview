import React from 'react';
import ReviewList from './ReviewList';
import Stars from './Stars';
import ReviewForm from './ReviewForm';

function Movie (props) {


let movie = props.movie;
//alert(JSON.stringify(movie))

    return ( 
        <> 
             
        <div className='card align-items-center' key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.image} alt="img" width="120px" />
          <p className="pt-3 fs-1">
            <h6>{movie.genre}  {movie.year}</h6>
          </p>
          <span className="pb-5">{movie.description}</span>
          <h2>Reviews</h2>
          <Stars movieid={movie.id}/>  
          <ReviewList movieid={movie.id}/>
          <ReviewForm movieid={movie.id} />  
        </div> 
          
        </>
        )
    
}
export default Movie;