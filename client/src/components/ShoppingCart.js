import "./styles/ShoppingCart.css";

import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import Shipping from './Shipping';
import CartItem from './CartItem';
import {toBRL} from './helpers';


const ShoppingCart = () => {
  
  const cart = useSelector((state) => state.cart);

  const renderComponent = () => {

    if(cart.quantity === 0){
      return(
        <div className="empty">
          <div className="empty__message">
            O carrinho está vazio
          </div>
          <Link className="empty__link link" to={"/"}>ir para o catálogo</Link>
        </div>
      )
    }

    return (
      <section className="shopping">
        <div className="shopping__cart">
          <h1>Carrinho de compras</h1>
          <div className="shopping__cart__content">
            {cart.shoppingCart.map((item) => {
              return (
                <CartItem 
                  key = {item.data.id}
                  item = {item}
                />
              )
            })}
          </div>
        </div>
        <div className="shopping__checkout">
          <div className="shopping__text-value">
            subtotal ({cart.quantity} {cart.quantity === 1 ? "item" : "itens"}): 
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
  }

  return (renderComponent());
}

export default ShoppingCart;
