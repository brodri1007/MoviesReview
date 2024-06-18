import React from 'react';
import ReviewList from './ReviewList';
import Stars from './Stars';
import ReviewForm from './ReviewForm';


const reviewsList = [ 
  {
    "id": 32,
    "movieid": 1,
    "reviewer": "Lucas Ventivogio",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
  {
    "id": 33,
    "movieid": 2,
    "reviewer": "Daniel Jeffry",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
  {
    "id": 35,
    "movieid": 3,
    "reviewer": "Juan Gonzales",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
  {
    "id": 33,
    "movieid": 4,
    "reviewer": "Pedro Rodriguez",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
];

function Movie (props) {


let movie = props.movie;
//alert(JSON.stringify(movie))

    return ( 
        <> 
             
        <div className='col card align-items-center' key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.image} alt="img" width="120px" />
          <p className=" pt-3 fs-1">
           <span className='yr'> {movie.genre}  {movie.year}</span>
          </p>
          <span className="pb-5">{movie.description}</span>
          <h2>Reviews</h2>
          <Stars />  
          <ReviewList  movieid={movie.id} initialReviewsList={reviewsList}/>          
        
        </div> 
          
        </>
        )
    
}
export default Movie;