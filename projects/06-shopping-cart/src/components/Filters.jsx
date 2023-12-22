/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Filters.css';

function Filters({ setFilters }) {
  const catecoriesArr = [
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
    setFilters((prevState) => ({ ...prevState, minPrice: event.target.value }));
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
        <label htmlFor="price">Price from</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeCategory}>
          {catecoriesArr.map((category, index) => (
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
