import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {fetchGames} from './actions';

function App() {

  const shopping = useSelector((state) => state.shopping);
  const dispatch = useDispatch();
  console.log(shopping);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div>meu app</div>
  );
}

export default App;
