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
        <label  htmlFor="reviewText">Review</label>  <br></br>      



<textarea
            onChange={(e) => setReviewText(e.target.value)}
            value={reviewText}
            type="text"
            id="user-review"
            rows="4"
            cols="100%"
          ></textarea>
      </div>
      <div>
        <label htmlFor="reviewer">Reviewer</label><br></br>
        <input
          type="text"
          id="reviewer"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
        />

        
      </div><br></br>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
