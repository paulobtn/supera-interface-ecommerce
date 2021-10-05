import "./styles/CartItem.css";

import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {toBRL} from './helpers';
import {removeFromCart} from '../actions';

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  let imagePath = require(`../assets/${item.data.image}`).default;

  return (
      <div className="item">
        <Link to={`/item/${item.data.id}`} className="item__link">
          <img 
            src={imagePath} 
            alt={`${item.data.name}`}
            className="item__image"
          />
        </Link>

        <div className="item__description">
          <div className="item__name">{item.data.name}</div>
          <div className="item__price blue-indicator">{toBRL(item.data.price)}</div>
          <div className="item__quantity">Quantidade: {item.quantity}</div>
          <button 
            onClick={() => {
              handleRemoveFromCart(item.data.id)
            }}
            className="item__remove btn"
          >
            Remover
          </button>
        </div>

      </div>
  ) 
}

export default CartItem;
