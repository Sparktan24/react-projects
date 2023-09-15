import { useState } from 'react';
import withResults from '../mocks/with-results.json';
import withoutResults from '../mocks/no-results.json';

export const useMovies = ({ search }) => {
  const [responseMovies, setResponseMovies] = useState([]);

  console.log(responseMovies.Search);
  const movies = responseMovies.Search;
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const getMovies = () => {
    if (search) {
      //  setResponseMovies(withResults);
      fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
        .then((res) => res.json())
        .then((json) => {
          setResponseMovies(json);
        });
    } else {
      setResponseMovies(withoutResults);
    }
  };

  return { movies: mappedMovies, getMovies };
};
