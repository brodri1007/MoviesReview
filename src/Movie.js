import React from 'react';
import Review from "./Review"
import ReviewForm from "./ReviewForm"
import Stars from "./Stars"

function Movie (props) {

    let title = props.title;
    let id = props.id;
    let image = props.image;
    let year = props.year;
    let genre = props.genre;
    let description = props.description;

    return (
        <>
            
            <div className='card align-items-center'  key={id}>
                <h3>{title}</h3>
                <img src={image} alt="img" width="290px" />
                <div class="pt-3 fs-1" ><h4>{genre} {year}</h4></div>
                <div class="pb-5">{description}</div>
            
            <section className='reviews'>
                <h2>Reviews</h2>
                <Stars />
                <Review />
                <h2>Review Form</h2>
                <ReviewForm />
            </section>
            </div>
         
       
        </>
        )
    
}
export default Movie;