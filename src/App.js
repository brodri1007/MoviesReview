import Movie from './Movie';
import ReviewForm from './ReviewForm';
import Reviews from './ReviewList';
import Stars from './Stars';
import './app.css';

function App() {
  return (
  
    <div className="movie">      
      <div className="col-5 card border ">
        <div id="container">          
          <Movie/>          
          <section className='reviews'>
            <h2>Reviews</h2>
           <Stars/>
           <Reviews/>           
            <h2>Review Form</h2>
           <ReviewForm/>
          </section>
        </div>
      </div>
    </div>
)

}

export default App;
