import { useState } from 'react';
import { products as initialProducts } from './mocks/products.json';
import Products from './components/Products';
import Header from './components/Header';

function useFilters() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

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
  return { filterProducts, setFilters };
}

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header setFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
