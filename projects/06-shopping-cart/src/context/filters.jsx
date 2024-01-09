/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

//  1.  Create Context
export const FilterContext = createContext();
//  2.  Create Provider
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });
  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
