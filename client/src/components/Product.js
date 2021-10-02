import { useParams } from 'react-router-dom';

import useRequest from '../hooks/useRequest';
import {RESOLVED, REJECTED} from '../hooks/useRequest';

const Product = () => {

  let {id} = useParams();
  let {response} = useRequest({
    url: `/api/games/${id}`,
    method: 'get'
  });

  console.log(response);

  const renderProduct = () => {
    switch(response.status){
      case RESOLVED:
        return (
          <div>Jogo {id}</div>
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
