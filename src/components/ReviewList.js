import React from 'react';
import Review from './components/Review';


const reviews = [ 
  {
    "id": 32,
    "movieid": 1,
    "name": "Oppenheimer",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
  {
    "id": 33,
    "movieid": 2,
    "name": "Oppenheimer",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
];


function ReviewList(movieid) {

 
<div key={reviews.id} className="col-4">
  <Review reviews={reviews}/>
</div>
     
     

 
  
}

export default ReviewList;



