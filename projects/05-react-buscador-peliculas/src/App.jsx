import { useCallback, useState } from 'react';
import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    //const { query } = Object.fromEntries(new window.FormData(e.target));
    //  Direct parameter to call function just once
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
            onChange={handleChange}
            value={search}
            name="query"
            type="text"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
