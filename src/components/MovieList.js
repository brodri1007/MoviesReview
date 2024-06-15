import React from 'react';
import Movie from "./components/Movie"

function MovieList(props) {


return(
    <>
        {props.movies.map(function (data) {            

            return (   
                <div key={data.id} className="col-4">      
                    <Movie key={data.id} title={data.title} image={data.image} year={data.year} genre={data.genre} description={data.description} /> 
                </div>      
            )
        })      
        }

    </>

)
}
export default MovieList