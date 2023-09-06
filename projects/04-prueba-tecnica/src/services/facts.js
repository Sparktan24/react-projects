const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  if (!res.ok) throw new Error('Error fetching fact'); //  if res not ok
  const data = await res.json();
  const { fact } = data;
  return fact;
};

export const getImage = async (firstWord) => {
  return fetch(
    `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`,
  )
    .then((res) => res.json())
    .then((response) => {
      const { url } = response;
      return url;
    });
};
