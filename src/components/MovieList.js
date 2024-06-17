import React from 'react';
import Movie from './Movie';


function MovieList(props) {
    
    let movies = props.movies;

    return (
        <>
            {movies.map(movie => {

                return (
                    <>
                       <Movie key={movie.movieid} movie={movie} />                          
                                    
                    </>
                )

            })}

        </>

    )
}
export default MovieList