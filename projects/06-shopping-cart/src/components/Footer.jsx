/* eslint-disable react/prop-types */
import './Footer.css';

function Footer({ filters }) {
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {/* <h4>Prueba tecnica</h4>
      <span>@Neto</span>
      <h5>Shopping Cart with useContext & useReducer</h5> */}
    </footer>
  );
}

export default Footer;