import React from 'react';






function Review(props) {
  
      return (
        <>
          <div>{props.reviewText}</div>
          <div className='user-name'>-{props.name}</div>
        </>
      )  
}
export default Review;

