import React from 'react';
import ReviewList from './components/ReviewList';




function Movie (props) {

  //alert(JSON.stringify(props));

    let title = props.title;
    let id = props.id;
    let image = props.image;
    let year = props.year;
    let genre = props.genre;
    let description = props.description;

    //alert(JSON.stringify(id))
      //alert(JSON.stringify(props.id))
      // if(reviews.id === props.id) {
      //     <Review movie-id={id} />
      // } 

    return ( 
        <>
            
            <div className='card align-items-center col'  key={id}>
                <h3>{title}</h3>
                <img src={image} alt="img" width="120px" />
                <div className="pt-3 fs-1" ><h6>{genre} {year}</h6></div>
                <div className="pb-5">{description}</div>
            
                {<h2>Reviews</h2>}
                        
                <ReviewList movieid={id} />
            </div>
         
       
        </>
        )
    
}
export default Movie;