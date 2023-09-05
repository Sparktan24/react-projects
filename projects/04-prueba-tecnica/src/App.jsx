import { useEffect } from 'react';
import { useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  const completeUrl = `${CAT_PREFIX_IMAGE_URL}${imageUrl}`;

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstWord = fact.split(' ')[0];
        console.log(firstWord);

        fetch(
          `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`,
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setImageUrl(url);
          });
      });
  }, []);
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
