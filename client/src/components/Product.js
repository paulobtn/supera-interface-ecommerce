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

    let imagePath = require(`../assets/${response.data.image}`).default;

    return(
      <session className="product">
        <div className="product__content">

          <img 
            src={imagePath} 
            alt={`${response.data.name}`}
            className="product__image"
          />
          
          <div className="product__text">
            <h1 className="product__name">{response.data.name}</h1>
            <h2 className="Product_price">{response.data.price}</h2>
            <p className="Product_description">
              Lorem ipsum dolor sit amet. Sit nisi aliquam quo iure dolorem
              eos autem temporibus in enim enim eum quis beatae aut fuga nihil
              eos dolorem dolores. Ut tenetur placeat et reiciendis commodi
              aut nihil autem a reprehenderit incidunt! Est consequuntur nobis
              ex asperiores rerum ut accusamus aperiam vel dolores nostrum et
              architecto vel amet enim.
            </p>
          </div>

          <div className="product__purchase">

            <label 
              htmlFor="qty-items">
              Quantidade
            </label>

            <input 
              type="number"
              name="qty-items"
              onChange={handleChange}
              value={qty}
            />

            <button onClick={() => {
              handleBuyNow(qty, response.data)
            }}> Comprar agora </button>

            <button onClick={() => {
              handleAddToCart(qty, response.data)
            }}> Adicionar ao carrinho </button>

          </div>

        </div>
      </session>
    )

  });
}

export default Product;
