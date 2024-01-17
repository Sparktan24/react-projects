/* eslint-disable react/prop-types */
import './Footer.css';
import { useFilters } from '../hooks/useFilters';
import { useCart } from '../hooks/useCart';

function Footer() {
  /*   const { filters } = useFilters();
  const { cart } = useCart(); */
  return (
    <footer className="footer">
      {/* {JSON.stringify(filters, null, 2)}
      {JSON.stringify(cart, null, 2)} */}
      <h4>Prueba tecnica</h4>
      <span>@Neto</span>
      <h5>Shopping Cart with useContext & useReducer</h5>
    </footer>
  );
}

export default Footer;
