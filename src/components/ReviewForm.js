import React, { useState } from 'react';

function ReviewForm({ movieid, onAddReview }) {
  const [reviewText, setReviewText] = useState('');
  const [reviewer, setReviewer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("handleSubmit; Props: ", props) 
    setMovieid(props.movieid);

    const newReview = {
      "id": Math.random(),
      "movieid": movieid,
      "reviewer": reviewer,
      "reviewText": review
    }

    if (review) {
      setList([...reviewList, newReview]);
      setReview("");
      setReviewer("");
    }

  };

  //console.log("review: " , review)
  //console.log("reviewer: ", reviewer)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="reviewText">Review</label>
        <input
          type="text"
          id="reviewText"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="reviewer">Reviewer</label>
        <input
          type="text"
          id="reviewer"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
