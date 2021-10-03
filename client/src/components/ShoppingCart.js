import {useSelector} from 'react-redux';

import CartItem from './CartItem';
import {toBRL} from './helpers';


const ShoppingCart = () => {
  
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const renderComponent = () => {

    return (
      <div>
        {cart.shoppingCart.map((item) => {
          return (
            <CartItem 
              key = {item.data.id}
              item = {item}
            />
          )
        })}
       
        <div>Subtotal: {toBRL(cart.subtotal)}</div>
        <div>Frete: {toBRL(cart.shipping)}</div>
        <div>Isento de frete: {cart.freeShipping ? 'sim' : 'não'}</div>
        <div>Total: {toBRL(cart.total)}</div>
      </div>
    )
    
  }

  return (renderComponent());
}

export default ShoppingCart;
