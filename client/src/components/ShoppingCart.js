import "./styles/ShoppingCart.css";

import {useSelector} from 'react-redux';

import Shipping from './Shipping';
import CartItem from './CartItem';
import {toBRL} from './helpers';



const ShoppingCart = () => {
  
  const cart = useSelector((state) => state.cart);

  const renderComponent = () => {

    return (
      <section className="shopping">
        <div className="shopping__cart">
          {cart.shoppingCart.map((item) => {
            return (
              <CartItem 
                key = {item.data.id}
                item = {item}
              />
            )
          })}
        </div>
        <div className="shopping__checkout">
          <div className="shopping__text-value">
            subtotal ({cart.quantity} itens): 
            <span>{toBRL(cart.subtotal)} </span>
          </div>
          <div className="shopping__text-value">
            Frete: <Shipping value={cart.shipping} freeShipping={cart.freeShipping} />
          </div>
          <div className="shopping__text-value">Total: <span>{toBRL(cart.total)}</span></div>
          <button className="shopping__pay btn">Pagar</button>
        </div>
       
      </section>
    )

          // <div>Isento de frete: {cart.freeShipping ? 'sim' : 'não'}</div>
  }

  return (renderComponent());
}

export default ShoppingCart;
