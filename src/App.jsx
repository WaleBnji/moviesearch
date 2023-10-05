// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
// import './App.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Card from './components/Card'

//7a824816

const url = 'http://www.omdbapi.com/?apikey=7a824816';

// const movie1 = {
//   "Title": "Batman v Superman: Dawn of Justice",
//   "Year": "2016",
//   "imdbID": "tt2975590",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovie = async (title) => {
    const res = await fetch(`${url}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search) 

    // console.log(data.Search);
    
  };
  
 
  useEffect(() => {
    searchMovie('American Pie' );
    
  }, []);

  // console.log(movies.Search)


  return (
    <>
    <div className='wrapper'>
      <h1 className='text-center text-white'>MovieSearch</h1>
      <div className='fbc border rounded-[15px] px-2 py-1 m-4 bg-white md:w-[40%] mx-auto'>
        <input type="search"  placeholder='Search' className='w-full focus:outline-none ' name='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <AiOutlineSearch onClick={() => {
          searchMovie(searchTerm)
        }} />

      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies?.map((movie) => {
           return  <Card movie={movie} key={movie.imdbID}/>

          })}
        </div>
      ) : (
        <h1>No movies</h1>
      )}
      

    </div>
    </>
  );
}

export default App;
