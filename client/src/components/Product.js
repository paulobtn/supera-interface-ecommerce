import "./styles/Product.css"

import { useParams, useHistory } from 'react-router-dom';
import useRequest from '../hooks/useRequest';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

import {renderWithRequest} from './helpers';
import {toBRL} from './helpers';
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
  
  /* altera input da quantidade de itens
   * só pode de 1 a 99
   * */
  const handleChange = (event) => {
    let newQty = event.target.value;
    if(newQty.length > 2){
      newQty = newQty.slice(0,2);
    }
    newQty = parseInt(newQty);
    if(newQty < 1) newQty = 1;
    setQty(newQty);
  }

  return renderWithRequest(response, () => {

    let imagePath = require(`../assets/${response.data.image}`).default;

    return(
      <section className="product">
        <div className="product__content">

          <img 
            src={imagePath} 
            alt={`${response.data.name}`}
            className="product__image"
          />
          
          <div className="product__text">
            <h1 className="product__name">{response.data.name}</h1>
            <div className="product__price blue-indicator">{toBRL(response.data.price)}</div>
            <p className="product__description">
              Lorem ipsum dolor sit amet. Sit nisi aliquam quo iure dolorem
              eos autem temporibus in enim enim eum quis beatae aut fuga nihil
              eos dolorem dolores. Ut tenetur placeat et reiciendis commodi
              aut nihil autem a reprehenderit incidunt! Est consequuntur nobis
              ex asperiores rerum ut accusamus aperiam vel dolores nostrum et
              architecto vel amet enim.
            </p>
          </div>

          <div className="product__purchase">
            
            <div className="product__qty">
              <label 
                htmlFor="qty-items">
                Quantidade: 
              </label>
              <input 
                type="number"
                min="1"
                max="99"
                name="qty-items"
                onChange={handleChange}
                value={qty}
              />
            </div>

            <button 
              onClick={() => {
                  handleBuyNow(qty, response.data)
                }
              }
              className="product__buy-now btn" 
            > Comprar agora </button>

            <button 
              onClick={() => {
                handleAddToCart(qty, response.data)
              }}
              className="product__add-to-cart btn" 
            > Adicionar ao carrinho </button>

          </div>

        </div>
      </section>
    )

  });
}

export default Product;
