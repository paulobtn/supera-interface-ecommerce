import {FETCH_GAMES, SET_ERROR, ADD_TO_CART} from '../actions/types';

export const initState = { //exportando para fins de teste
    // items: [],
    shoppingCart:[],
    // error: null
}

const shoppingReducer = (state = initState, action) => {

    switch(action.type){
        case FETCH_GAMES:
        // Adiciona todos os jogos no campo items do
        // redux store
            return {
              ...state,
              error: null,
              items: action.payload
            }
        case SET_ERROR:
          return {
            ...state,
            error: action.payload
          }
        case ADD_TO_CART:
          
          // copia o carrinho de compras que já existia
          let newCart = [...state.shoppingCart];

          // verifica se o produto já existe
          let product = newCart.find( (product) => {
            return product.data.id === action.payload.data.id
          });
          
          // se o produto existir, incrementa a quantidade, se não, adiciona ao carrinho
          if(product){
            newCart[newCart.indexOf(product)].qtd += action.payload.qtd;
          } else{
            newCart = newCart.concat(action.payload);
          }
          
          return{
            ...state,
            shoppingCart: newCart
          }
        default:
            return state;
    }
}

export default shoppingReducer;
