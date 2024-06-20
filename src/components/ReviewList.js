import React, { useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';




function ReviewList(props) { 

  /*Get initial reviews list and movie id from Movie props*/
  const { initialReviewsList = [], movieid } = props;
  /*Create the new review list to include all the initial reviews and create a way to update it and force re-render.*/
  const [reviewsList, setReviewsList] = useState(initialReviewsList);
 
  /*Constant to hold the function to add new reviews to the reviews list*/
  const handleAddReview = (newReview) => {
    console.log(`New Review entry: ${newReview}`)
    setReviewsList([...reviewsList, newReview]);
  };  

//console.log(`Unfiltered list: ${JSON.stringify(reviewsList)}`)
//console.log(`${movieid}`)


  /*Filter the list of reviews to only show the ones related to the particular movie being displayed*/
const filteredReviewList = reviewsList.filter(review => review.movieid === movieid);
console.log(`Filtered list: ${JSON.stringify(filteredReviewList)}`)


  return (
    /*Loop thru the filtered reviews/call the Review component to diplay each review, and show the review form at the end, passing the movie id */
    <>
      {filteredReviewList.map(movieReview => (

        <div key={movieReview.id} className="col text-start">
          <Review reviewText={movieReview.reviewText} reviewer={movieReview.reviewer} setReviewsList={setReviewsList} />
        </div>

      ))}

      <ReviewForm movieid={movieid} onAddReview={handleAddReview} />
    </>
  );
}

export default ReviewList;