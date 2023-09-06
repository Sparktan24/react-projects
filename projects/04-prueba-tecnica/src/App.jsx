import { useEffect, useState } from 'react';
import './App.css';
import { getRandomFact } from './services/facts';
import { useCatImage } from './hooks/useCatImage';

//  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact)); //  getRandomFact().then(setFact) < equivalent
  };
  //  GET FACT
  useEffect(refreshFact, []);

  return { fact, refreshFact };
};

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact }); //  Custom hook

  const completeUrl = `${CAT_PREFIX_IMAGE_URL}${imageUrl}`;

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Cat App</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={completeUrl}
          alt={`Image extracting using the first word for ${fact}`}
        />
      )}
    </main>
  );
}

export default App;
