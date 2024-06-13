import React from 'react';
import Movie from "./Movie"
import Review from "./Review"
import ReviewForm from "./ReviewForm"
import Stars from "./Stars"


function MovieList(props) {

return(
    <>
        {props.movies.map(function (data, index) {
        return (   
        
        <div class="col-3">      
            <Movie key={index} title={data.title} image={data.image} year={data.year} genre={data.genre} description={data.description} />    
        </div>      
        )
      })}

    </>

)
}
export default MovieList