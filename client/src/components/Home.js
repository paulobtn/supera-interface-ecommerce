import GamesList from './GamesList';
import useRequest from '../hooks/useRequest';
import {RESOLVED, REJECTED} from '../hooks/useRequest';

const Home = () => {
  
  let {response} = useRequest({
    url: '/api/games',
    method: 'get'
  });

  const renderHome = () => {
    switch(response.status){
      case RESOLVED:
        return (
          <div>
            <GamesList
              games = {response.data}
            />
          </div>
        )
      case REJECTED:
        return response.error.response.statusText;
      default:
        return 'loading...'
    }
  }

  return (renderHome());
}

export default Home;
