import { useParams } from 'react-router-dom';

import useRequest from '../hooks/useRequest';
import {renderWithRequest} from './helpers';

const Product = () => {

  let {id} = useParams();

  let {response} = useRequest({
    url: `/api/games/${id}`,
    method: 'get'
  });
  
  return renderWithRequest(response, () => {

    let imagePath = `${process.env.PUBLIC_URL}/assets/${response.data.image}`;

    return(
      <div style={{padding: '1rem'}}>
        <img src={imagePath} alt={`${response.data.name}`}/>
        <div>id: {response.data.id}</div>
        <div>name: {response.data.name}</div>
        <div>price: {response.data.price}</div>
        <div>score: {response.data.score}</div>
        <button>adicionar ao carrinho</button>
      </div>
    )

  });
}

export default Product;
