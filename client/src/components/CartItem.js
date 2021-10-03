import {Link} from 'react-router-dom';
import {toBRL} from './helpers';

const CartItem = ({ item }) => {

  let imagePath = `${process.env.PUBLIC_URL}/assets/${item.data.image}`;
  return (
    <Link to={`/item/${item.data.id}`}>
      <div style={{padding: '1rem'}}>
        <img src={imagePath} alt={`${item.data.name}`}/>
        <div>id: {item.data.id}</div>
        <div>name: {item.data.name}</div>
        <div>price: {toBRL(item.data.price)}</div>
        <div>score: {item.data.score}</div>
        <div>quantity: {item.quantity}</div>
      </div>
    </Link>
  ) 
}

export default CartItem;
