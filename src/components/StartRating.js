import React from 'react';

function StartRating() {

 

     let  value= null;



return (

 <div>
    <b-form-rating v-model="value"></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>

)


}

export default StartRating