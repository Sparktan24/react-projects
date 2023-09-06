import { useEffect, useState } from 'react';
import './App.css';
import { getRandomFact, getImage } from './services/facts';

//  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  const completeUrl = `${CAT_PREFIX_IMAGE_URL}${imageUrl}`;

  //  Get fact on load
  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact)); //  getRandomFact().then(setFact) < equivalent
  }, []);

  //  get image with each new fact
  useEffect(() => {
    if (!fact) return; // if there is not fact return
    const firstWord = fact.split(' ')[0];
    getImage(firstWord).then((imageUrl) => setImageUrl(imageUrl));
  }, [fact]);

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
