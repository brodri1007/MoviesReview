import React, { useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';




function ReviewList(props) { 
  const { initialReviewsList = [], movieid } = props;
  const [reviewsList, setReviewsList] = useState(initialReviewsList);

  const handleAddReview = (newReview) => {
    setReviewsList([...reviewsList, newReview]);
  };

  const filteredReviewList = reviewsList.filter(review => review.movieid === movieid);

  return (
    <>
      {filteredReviewList.map(movieReview => (
        <div key={movieReview.id} className="col">
          <Review reviews={[movieReview]} setReviewsList={setReviewsList}  />
        </div>
      ))}
      <ReviewForm movieid={movieid} onAddReview={handleAddReview} />
    </>
  );
}

export default ReviewList;