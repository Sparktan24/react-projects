/* eslint-disable react/prop-types */
import { useState, useId } from 'react';
import './Filters.css';

function Filters({ setFilters }) {
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

  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
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
        />
        <span>${minPrice}</span>
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
