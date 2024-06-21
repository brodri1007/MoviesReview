import React from 'react';
import Movie from './Movie';



function MovieList(props) {
    
    let movies = props.movie;

    return (
        <>
        {movies.map(movie => {
            return (
                <div className="col">
                    <Movie movie={movie} />                
                </div>                 
            )
        })}
        </>

    )
}
export default MovieList