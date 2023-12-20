import { useCatImage } from '../hooks/useCatImage';
import { useCatFact } from '../hooks/useCatFact';

export const Test = () => {
  const { fact } = useCatFact();
  const { imageUrl } = useCatImage({ fact }); //  Custom hook

  return <>{imageUrl && <img src={imageUrl} />}</>;
};
