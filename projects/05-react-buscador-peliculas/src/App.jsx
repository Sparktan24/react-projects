import { useRef } from 'react';
import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';

function App() {
  const { movies } = useMovies();
  //const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //  const fields = new window.FormData(e.target);
    //  const query = fields.get('query');
    const { query } = Object.fromEntries(new window.FormData(e.target));
    console.log(query);
    //  const value = inputRef.current.value;
    //  console.log(value);
  };
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
