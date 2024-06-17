import React from 'react';
import { useState } from 'react';


function ReviewForm (props) {

  const [review, setReview] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [movieid, setMovieid] = useState("");
  const [reviewList, setList] = useState([])


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
    console.log(newReview)
alert(`${newReview.reviewer} says ${newReview.reviewText}`)
    if (review) {
      setList([...reviewList, newReview]);
      console.log(reviewList)
      setReview("");
      setReviewer("");
    }

  };

  //console.log("review: " , review)
  //console.log("reviewer: ", reviewer)

    return (

      <form onSubmit={handleSubmit} className="review-form p-5">
        <div className="form-row">
          <input type = "hidden" name = "movieid" value = {movieid} />
          <label htmlfor="user-name">User Name</label>

          <input
            onChange={(e) => setReviewer(e.target.value)}
            value={reviewer}
            type="text"
            id='reviewer'
          />
        </div>
        <div className="form-row">
         
          <label htmlfor="user-review">Review</label>
          <textarea
            onChange={(e) => setReview(e.target.value)}
            value={review}
            type="text"
            id="user-review"
            rows="4"
            cols="25"
          ></textarea>
        </div>
        <button className='btn btn-primary btn-block mt-4 btn-lg'>Submit</button>
      </form>
    )

}

export default ReviewForm;