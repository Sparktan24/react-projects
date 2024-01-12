import { useId } from 'react';
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons';
import './Cart.css'

function Cart() {
  const cartCheckBoxId = useId();
  return (
  <>
    <label className='cart-button' htmlFor='cartCheckBoxId'>
      <CartIcon />
    </label>
    <input id={cartCheckBoxId} type="checkbox" hidden />

    <aside className='cart'>
      <ul>
        <li>
          <img src='https://i.dummyjson.com/data/products/2/thumbnail.jpg' alt='iphone' />
          <div>
            <strong>IPhone X</strong> - $899
          </div>

          <footer>
            <small>
              Qty: 1
            </small>
            <button>+</button>
          </footer>
        </li>
      </ul>
    </aside>
  </>)
}

export default Cart