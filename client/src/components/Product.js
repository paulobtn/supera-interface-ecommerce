import { useParams, useHistory } from 'react-router-dom';
import useRequest from '../hooks/useRequest';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

import {renderWithRequest} from './helpers';
import {addToCart} from '../actions';

const Product = () => {
  
  const dispatch = useDispatch();
  const history = useHistory();

  // quantidade de itens a adicionar no carrinho
  const [qty, setQty] = useState(1);
  
  // id do produto vindo da URL
  let {id} = useParams();

  // realiza a requisição dos dados do jogo
  let {response} = useRequest({
    url: `/api/games/${id}`,
    method: 'get'
  });

  // botão de adicionar no carrinho adicionar no carrinho
  const handleAddToCart = (quantity, data) => {
    dispatch(addToCart(quantity, data));
    console.log(qty + " itens adicionados ao carrinho");
  }
  
  /* botão que adiciona no carrinho e redireciona para a 
   * página de compra */
  const handleBuyNow = (quantity, data) => {
    handleAddToCart(quantity, data);
    history.push("/cart");
  }
  
  /* altera input da quantidade de itens */
  const handleChange = (event) => {
    let newQty = parseInt(event.target.value);
    if(newQty < 0) newQty = 0;
    setQty(newQty);
  }

  return renderWithRequest(response, () => {

    let imagePath = `${process.env.PUBLIC_URL}/assets/${response.data.image}`;

    return(
      <div style={{padding: '1rem'}}>
        <img src={imagePath} alt={`${response.data.name}`}/>

        <div>id: {response.data.id}</div>
        <div>name: {response.data.name}</div>
        <div>price: {response.data.price}</div>
        <div>score: {response.data.score}</div>

        <div>
          <label htmlFor="qty-items">
            Quantidade
          </label>
            <input 
              type="number"
              name="qty-items"
              onChange={handleChange}
              value={qty}
            />
            <button onClick={() => {
              handleAddToCart(qty, response.data)
            }}> Adicionar ao carrinho </button>

            <button onClick={() => {
              handleBuyNow(qty, response.data)
            }}> Comprar agora </button>
          
        </div>
      </div>
    )

  });
}

export default Product;
