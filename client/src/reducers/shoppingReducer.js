import {FETCH_GAMES, SET_ERROR} from '../actions/types';

const initState = {
    items: [],
    shoppingCart:[],
    error: null
}

const shoppingReducer = (state = initState, action) => {

    switch(action.type){
        case FETCH_GAMES:
        /* Adiciona todos os jogos no campo items do 
         * redux store */
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
        default:
            return state;
    }
}

export default shoppingReducer;
