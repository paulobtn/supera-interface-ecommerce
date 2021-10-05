import "./styles/ShoppingCart.css";

import {useSelector} from 'react-redux';

import CartItem from './CartItem';
import {toBRL} from './helpers';


const ShoppingCart = () => {
  
  const cart = useSelector((state) => state.cart);

  const renderComponent = () => {

    return (
      <section className="shopping">
          {cart.shoppingCart.map((item) => {
            return (
              <CartItem 
                key = {item.data.id}
                item = {item}
              />
            )
          })}
       
      </section>
    )

        // <div>quantidade: {cart.quantity}</div>
        // <div>Subtotal: {toBRL(cart.subtotal)}</div>
        // <div>Frete: {toBRL(cart.shipping)}</div>
        // <div>Isento de frete: {cart.freeShipping ? 'sim' : 'não'}</div>
        // <div>Total: {toBRL(cart.total)}</div>
  }

  return (renderComponent());
}

export default ShoppingCart;
