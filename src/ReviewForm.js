import React from 'react';
import { useState } from 'react';





function ReviewForm () {

    const [newReview, setReview] = useState("");
    const [review, addReview] = useState([]);

    function handleSubmit(e) {
       e.preventDefault()

       setReview([...newReview, { id: crypto.randomUUID(), name: "Byron Rodriguez", reviewText: "Just another review" },
        ])
    }

    


    return (

    <form className="review-app" onSubmit={{handleSubmit}}>
        <div className="form-row"><label htlmFor="user-name"> User Name</label>
        <input type="text" value={newReview} id='userName' onChange={e=> addReview(e.target.value)} /> </div>          
        <div className="form-row"><label htlmFor="user-review">Review</label>
        <textarea type="text" id="user-review" value={newReview} rows="4" cols="25"></textarea>  </div>          
        <button className='btn btn-primary btn-block mt-4 btn-lg' onClick={handleSubmit} >Submit</button>
    </form>
    )

}

export default ReviewForm;