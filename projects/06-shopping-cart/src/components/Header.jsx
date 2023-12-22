/* eslint-disable react/prop-types */
import Filters from './Filters';

function Header({ setFilters }) {
  return (
    <header>
      <h1>React shop 🛒</h1>
      <Filters setFilters={setFilters} />
    </header>
  );
}

export default Header;
