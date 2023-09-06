import { useEffect, useState } from 'react';
import './App.css';
import { getRandomFact } from './services/facts';
import { useCatImage } from './hooks/useCatImage';

//  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

function App() {
  const [fact, setFact] = useState();
  const { imageUrl } = useCatImage({ fact }); //  Custom hook
  //  const prefixUrl = useCatImage();
  const completeUrl = `${CAT_PREFIX_IMAGE_URL}${imageUrl}`;

  //  Get fact on load
  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact)); //  getRandomFact().then(setFact) < equivalent
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
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
