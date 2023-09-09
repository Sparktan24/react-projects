import './App.css';
import { Movies } from './components/Movies';

function App() {
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input type="text" placeholder="Avengers, Star Wars, The Matrix..." />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        <Movies />
      </main>
    </div>
  );
}

export default App;
