import { useContext } from 'react';
import { FilterContext } from '../context/filters';

export function useFilters() {
  const { filters, setFilters } = useContext(FilterContext);
  //console.log({ filters });

  //const filterCat = [...new Set(products.map((product) => product.category))];
  //console.log(filterCat);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || filters.category === product.category)
      );
    });
  };
  return { filters, filterProducts, setFilters };
}