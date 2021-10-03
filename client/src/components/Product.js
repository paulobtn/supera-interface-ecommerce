import { useParams } from 'react-router-dom';
import useRequest from '../hooks/useRequest';
import {useSelector, useDispatch} from 'react-redux';

import {renderWithRequest} from './helpers';
import {addToCart} from '../actions';

const Product = () => {
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (qtd, data) => {
    dispatch(addToCart(qtd, data));
  }

  let {id} = useParams();

  let {response} = useRequest({
    url: `/api/games/${id}`,
    method: 'get'
  });

  console.log(cart);
  
  return renderWithRequest(response, () => {

    let imagePath = `${process.env.PUBLIC_URL}/assets/${response.data.image}`;

    return(
      <div style={{padding: '1rem'}}>
        <img src={imagePath} alt={`${response.data.name}`}/>

        <div>id: {response.data.id}</div>
        <div>name: {response.data.name}</div>
        <div>price: {response.data.price}</div>
        <div>score: {response.data.score}</div>

        <button onClick={() => {
          handleAddToCart(1, response.data) 
        }}>
          Adicionar ao carrinho
        </button>
        <button>Comprar agora</button>
      </div>
    )

  });
}

export default Product;
