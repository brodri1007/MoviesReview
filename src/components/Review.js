import React from 'react';
import ReviewForm from './ReviewForm';

function Review({ reviews = [] }) {
  return (
    <>
      {reviews.map(review => (
        <div key={review.id} id="review">
          <p>{review.reviewText}</p>
          <p>- {review.reviewer}</p>
        </div>
        

      ))}

    </>
  );
}

export default Review;


