import React from 'react';


function Review(props) {
 
 
  let review = props.review;
  

  return (
    <>
      <li key={review.id}>
        <p>
          <b>{review.reviewText}</b>
          {'-' + review.userName}
        </p>
      </li>
    </>


      )  
}
export default Review;

