import { useParams } from 'react-router-dom';

import useRequest from '../hooks/useRequest';
import {RESOLVED, REJECTED} from '../hooks/useRequest';

const Product = () => {

  let {id} = useParams();
  let {response} = useRequest({
    url: `/api/games/${id}`,
    method: 'get'
  });

  const renderProduct = () => {

    switch(response.status){

      case RESOLVED:

        let imagePath = `${process.env.PUBLIC_URL}/assets/${response.data.image}`;

        return(
          <div style={{padding: '1rem'}}>
            <img src={imagePath} alt={`${response.data.name}`}/>
            <div>id: {response.data.name.id}</div>
            <div>name: {response.data.name}</div>
            <div>price: {response.data.price}</div>
            <div>score: {response.data.score}</div>
          </div>
        ) 

      case REJECTED:
        return response.error.response.statusText;
      default:
        return 'loading...'
    }
  }
  
  return(renderProduct());
}

export default Product;
