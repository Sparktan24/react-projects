import { useEffect, useState } from 'react';
import './App.css';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  const completeUrl = `${CAT_PREFIX_IMAGE_URL}${imageUrl}`;

  //  Get fact on load
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => {
        if (!res.ok) throw new Error('Error fetching fact'); //  if res not ok
        return res.json();
      })
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  //  get image with each new fact
  useEffect(() => {
    if (!fact) return; // if there is not fact return
    const firstWord = fact.split(' ')[0];

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`,
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  return (
    <main>
      <h1>Cat App</h1>
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
