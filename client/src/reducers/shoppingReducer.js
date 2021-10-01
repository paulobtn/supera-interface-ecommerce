import {FETCH_GAMES} from '../actions/types';

const initState = {
    items: [],
    shoppingCart:[]
}

const shoppingReducer = (state = initState, action) => {

    switch(action.type){
        case FETCH_GAMES:
        /* Adiciona todos os jogos no campo items do 
         * redux store */
            return {
              ...state,
              items: action.payload
            }
        default:
            return state;
    }
}

export default shoppingReducer;
