import { useState, useEffect } from 'react';
import { getRandomFact } from '../services/facts';

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact)); //  getRandomFact().then(setFact) < equivalent
  };
  //  GET FACT
  useEffect(refreshFact, []);

  return { fact, refreshFact };
};
