import { useContext, useState } from 'react';
import { products as initialProducts } from './mocks/products.json';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import { IS_DEVELOPMENT } from './config';
import { FilterContext } from './context/filters';

function useFilters() {
  const { filters, setFilters } = useContext(FilterContext);
  console.log({ filters });

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

function App() {
  const [products] = useState(initialProducts);
  const { filters, filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header setFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
