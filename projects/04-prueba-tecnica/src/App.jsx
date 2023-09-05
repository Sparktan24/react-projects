import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [fact, setFact] = useState('lorem ipsum cat fact');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }, []);
  return (
    <main>
      <h1>Cat App</h1>
      <p>{fact}</p>
    </main>
  );
}

export default App;
