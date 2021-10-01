import axios from "axios";
import { FETCH_GAMES } from "./types";

// dispatch de todos os jogos de products.json
export const fetchGames = () => async (dispatch) => {
  const res = await axios.get("/api/games");
  dispatch({ type: FETCH_GAMES, payload: res.data });
};
