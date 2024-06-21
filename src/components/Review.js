import React from 'react';



function Review(props) {
 
  return (
      <>
         
          <div>{props.reviewText}</div>
          <div className='user-name'>-{props.reviewer}</div>
       
      </>

  )
}
export default Review;


