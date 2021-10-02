import axios from "axios";
import { FETCH_GAMES, SET_ERROR, ADD_TO_CART } from "./types";

// informa o erro no redux store
export const setError = (msg) => async (dispatch) => {
  dispatch({ type: SET_ERROR, payload: msg });
};

// recupera todos os jogos de products.json
export const fetchGames = () => {
  return (dispatch) => {
    return axios.get("/api/games")
      .then((res) => {
        dispatch({ type: FETCH_GAMES, payload: res.data });
      })
      .catch((err) => {
        dispatch(setError(err.response.statusText));
      });
  };
}

export const addToCart = (qtd, data) => async (dispatch) => {
  dispatch({type: ADD_TO_CART, payload: {qtd, data}})
};
