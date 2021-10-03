import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {toBRL} from './helpers';
import {removeFromCart} from '../actions';

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  let imagePath = `${process.env.PUBLIC_URL}/assets/${item.data.image}`;
  return (
      <div style={{padding: '1rem'}}>
        <Link to={`/item/${item.data.id}`}>
          <img src={imagePath} alt={`${item.data.name}`}/>
        </Link>
        <div>id: {item.data.id}</div>
        <div>name: {item.data.name}</div>
        <div>price: {toBRL(item.data.price)}</div>
        <div>score: {item.data.score}</div>
        <div>quantity: {item.quantity}</div>
        <button onClick={() => {
          handleRemoveFromCart(item.data.id)
        }}> Remover </button>
      </div>
  ) 
}

export default CartItem;
