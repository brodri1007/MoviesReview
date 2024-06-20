import React, { useState } from 'react';

function ReviewForm({ movieid, onAddReview }) {
  const [reviewText, setReviewText] = useState('');
  const [reviewer, setReviewer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      id: Math.round(Math.random() * 1000), 
      movieid,
      reviewText,
      reviewer
    };

    onAddReview(newReview);
    //console.log(newReview)
    // Clear form fields
    setReviewText('');
    setReviewer('');
  };

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
