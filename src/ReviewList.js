import React from 'react';
import Review from './Review';


function ReviewList(props) {

  return (
    <>
      {props.reviews.map(function (data, index) {
        return (

          <div class="col-3">
            <Review key={index} name={data.name} reviewText={data.reviewText} />
          </div>
        )
      })}

    </>


  )

}
export default ReviewList;