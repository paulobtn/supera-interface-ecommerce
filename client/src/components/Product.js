import { useParams } from 'react-router-dom';

import useRequest from '../hooks/useRequest';

const Product = () => {

  let {id} = useParams();
  let {response} = useRequest({url: `/api/games/${id}`, method: 'get'});

  console.log(response);
  
  return (
    <div>Jogo {id}</div>
  );
}

export default Product;
