import { useState, useEffect } from 'react';
import { getImage } from '../services/facts';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
//  CUSTOM HOOK
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  //  get image with each new fact
  useEffect(() => {
    if (!fact) return; // if there is not fact return
    const firstWord = fact.split(' ')[0];
    getImage(firstWord).then((imageUrl) => setImageUrl(imageUrl));
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
} // { imageUrl: 'https:// ...'}
