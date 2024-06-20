import React from 'react';



function Review(props) {

console.log(props.reviewer, props.reviewText)

  
  return (
      <>
         
          <div>{props.reviewText}</div>
          <div className='user-name'>-{props.reviewer}</div>
       
      </>

  )
}
export default Review;


