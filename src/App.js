import React from 'react';
import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Movie from './components/Movie';

let movies = [
  {
    "id": 1,
    "rank": 32,
    "title": "Oppenheimer",
    "description": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    "image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],

    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "rating": "0",
    "year": 2023,
    "imdbid": "tt15398776",
    "imdb_link": "https://www.imdb.com/title/tt15398776"
  },
  {
    "id": 2,
    "rank": 33,
    "title": "Harakiri",
    "description": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
    "image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
    "genre": [
      "Action",
      "Drama",
      "Mystery"
    ],

    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UY67_CR2,0,45,67_AL_.jpg",
    "rating": "0",
    "year": 1962,
    "imdbid": "tt0056058",
    "imdb_link": "https://www.imdb.com/title/tt0056058"

  },
  {
    "id": 3,
    "rank": 34,
    "title": "Back to the Future",
    "description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    "image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "genre": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "rating": "0",
    "year": 1985,
    "imdbid": "tt0088763",
    "imdb_link": "https://www.imdb.com/title/tt0088763"
  },
  {
    "id": 4,
    "rank": 35,
    "title": "The Pianist",
    "description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    "image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    "genre": [
      "Biography",
      "Drama",
      "Music"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR2,0,45,67_AL_.jpg",
    "rating": "0",
    "year": 2002,
    "imdbid": "tt0253474",
    "imdb_link": "https://www.imdb.com/title/tt0253474"
  }

]


const baseReviews = [ 
  {
    "id": 32,
    "movieid": 1,
    "reviewer": "Lucas Ventivogio",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
  {
    "id": 34,
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
    "id": 36,
    "movieid": 4,
    "reviewer": "Pedro Rodriguez",
    "reviewText": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",   
  },
]


function App() {

  let movies = [
    {
      "id": 1,
      "rank": 32,
      "title": "Oppenheimer",
      "description": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      "image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Biography",
        "Drama",
        "History"
      ],

      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "0",
      "year": 2023,
      "imdbid": "tt15398776",
      "imdb_link": "https://www.imdb.com/title/tt15398776"
    },
    {
      "id": 2,
      "rank": 33,
      "title": "Harakiri",
      "description": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
      "image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
      "genre": [
        "Action",
        "Drama",
        "Mystery"
      ],

      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UY67_CR2,0,45,67_AL_.jpg",
      "rating": "0",      
      "year": 1962,
      "imdbid": "tt0056058",
      "imdb_link": "https://www.imdb.com/title/tt0056058"

      },
      {
        "id": 3,
        "rank": 34,
        "title": "Back to the Future",
        "description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        "image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
        "big_image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
        "genre": [
          "Adventure",
          "Comedy",
          "Sci-Fi"
        ],
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
        "rating": "0",        
        "year": 1985,
        "imdbid": "tt0088763",
        "imdb_link": "https://www.imdb.com/title/tt0088763"
      },
      {
        "id": 4,
        "rank": 35,
        "title": "The Pianist",
        "description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        "image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
        "big_image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
        "genre": [
          "Biography",
          "Drama",
          "Music"
        ],
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR2,0,45,67_AL_.jpg",
        "rating": "0",        
        "year": 2002,
        "imdbid": "tt0253474",
        "imdb_link": "https://www.imdb.com/title/tt0253474"
   }

  ]

  

  return (
    <>     
                   
      <Movie key={index} title={data.title} description={data.description} image={data.image} year={data.year} genre={data.genre} /> 
      <h2>Reviews</h2>
      <Review reviews={baseReviews}/>

    <div className="App">
      <h1>Movie Reviews</h1>
      <div className="row"> 
      {movies.map(movie => {
            return (
                <><div className="col" key={movie.movieid}>
                    <Movie key={movie.movieid} movie={movie} /> 
                  </div> 
                </>
            )
        })}
      </div>  
    </div>
  )

export default App;



