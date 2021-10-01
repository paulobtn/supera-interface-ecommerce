import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {fetchGames} from '../actions';
import GamesList from './GamesList';

function App() {

  const shopping = useSelector((state) => state.shopping);
  const dispatch = useDispatch();
  const renderApp = () => {
    
    if(shopping.error){
      return <div>{shopping.error}</div>
    }

    return (
      <div>
        <GamesList
          games = {shopping.items}
        />
      </div>
    )
  }
  
  // recupera todos os jogos do catálogo
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  console.log(shopping);

  return ( renderApp());
}

export default App;
