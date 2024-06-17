import React from 'react';
import Review from './Review';


const reviewsList = [ 
  {
    "id": 32,
    "movieid": 1,
    "reviewer": "Lucas Ventivogio",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
  {
    "id": 33,
    "movieid": 2,
    "reviewer": "Daniel Jeffry",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
  {
    "id": 35,
    "movieid": 3,
    "reviewer": "Juan Gonzales",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
  {
    "id": 33,
    "movieid": 4,
    "reviewer": "Pedro Rodriguez",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
];


function ReviewList(props) { 

  let movieid = props.movieid;

  const filteredReviewList = reviewsList.filter(review => review.movieid === movieid);
  
  return (
    <>
      {filteredReviewList.map(movieReview => (
        <div key={movieReview.id} className="col-4">
          <Review reviews={[movieReview]} />
        </div>
      ))}
    </>
  );
}

export default ReviewList;




