import React, { useState } from 'react';

function ReviewForm({ movieid, onAddReview }) {

  /* Get variables for review text and reviewer and save the as state */
  const [reviewText, setReviewText] = useState('');
  const [reviewer, setReviewer] = useState('');


  /* Handle the submit for the review form. Check if the review textarea is empty and if not, create new review object
   and pass ito the OnAddReview function */

  const handleSubmit = (event) => {
    event.preventDefault();

    if(reviewText !==''){
    const newReview = {
      id: Math.round(Math.random() * 1000), 
      movieid,
      reviewText,
      reviewer
    };

    onAddReview(newReview);

    // Clear form fields
    setReviewText('');
    setReviewer('');
  } else {

    alert("Please enter a review.")
  };
}



  return (
  /* Render review form to read the values and add onchange function  */
    <form onSubmit={handleSubmit}>
      <div>
        <label  htmlFor="reviewText">Review</label>  
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
