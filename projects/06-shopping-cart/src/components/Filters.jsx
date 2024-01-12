/* eslint-disable react/prop-types */
import { useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters';

function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoriFilterId = useId();

  const categoriesArr = [
    'all',
    'home-decoration',
    'laptops',
    'smartphones',
    'fragrances',
    'skincare',
    'groceries',
  ];

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price from</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoriFilterId}>Category</label>
        <select id={categoriFilterId} onChange={handleChangeCategory}>
          {categoriesArr.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
          {/* <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option> */}
        </select>
      </div>
    </section>
  );
}

export default Filters;
