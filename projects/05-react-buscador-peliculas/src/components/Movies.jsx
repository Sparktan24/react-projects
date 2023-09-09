/* eslint-disable react/prop-types */
import responseMovies from '../mocks/with-results.json';
import noResponseMovies from '../mocks/no-results.json';

const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
};

const NoMoviesResult = () => {
  return <p>No se encontraron resultados</p>;
};

export const Movies = () => {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResult />;
};
