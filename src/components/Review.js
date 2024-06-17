import React from 'react';


function Review(props) {
  
  let reviews = props.reviews;

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




