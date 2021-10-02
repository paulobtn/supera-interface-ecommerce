import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {fetchGames} from '../actions';
import GamesList from './GamesList';

const Home = () => {
  const shopping = useSelector((state) => state.shopping);
  const dispatch = useDispatch();

  // recupera todos os jogos do catálogo
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  console.log(shopping);

  //checa se existe erros
  if(shopping.error){
    return <div>{shopping.error}</div>
  }
  
  // Renderiza o catálogo de jogos
  return (
    <div>
      <GamesList
        games = {shopping.items}
      />
    </div>
  );
}

export default Home;
