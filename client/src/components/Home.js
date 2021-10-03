import GamesList from './GamesList';
import useRequest from '../hooks/useRequest';

import {renderWithRequest} from './helpers';

const Home = () => {
  
  let {response} = useRequest({
    url: '/api/games',
    method: 'get'
  });

  return renderWithRequest(response, () => {
    return (
      <div>
          <GamesList
            games = {response.data}
            sortProperty='price'
            sortOrder = {-1}
          />
      </div>
    );
  });

}

export default Home;
