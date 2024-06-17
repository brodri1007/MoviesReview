import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';





function Review(props) {

  
  let reviews = props.reviews;

  return (
    <>
      {reviews.map(review => (
        <div key={review.id} id="review">
          <p>{review.reviewText}</p>
          <p>- {review.reviewer}</p>   
          <ReviewList movieid={review.id} />          
          <ReviewForm movieid={review.id} />      
        </div>
        

      ))}
    </>
  );
}

export default Review;




