import React from 'react';



let reviewsArray = [ 
    {
      "id": 1,
      "name": "Byron Rodriguez",
      "reviewText": "Everyone go see this movie!",   
    },
    {
      "id": 2,
      "name": "Dougla Smith",
      "reviewText": "Great movie!",   
    },
  ]


function ReviewForm () {

    // const [reviews, setReviewsArray] = useState({
    //     id: crypto.randomUUID(),
    //     name: 'Wendell Rodriguez',
    //     reviewText: "Great movie!",      
    //   });

    //   const addReview = (newReview) => {
    //     setReviewsArray(prevReviews => [...prevReviews, newReview])
    //   };


    return (

    <form className="review-app">     
       
        <button className='btn btn-primary btn-block mt-4 btn-lg'>Submit</button>
    </form>
    )

}

export default ReviewForm;