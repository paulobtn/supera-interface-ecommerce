import { Link } from "react-router-dom";

const GamesList = ({games}) => {

  return (
    games.map( (item) => {
      let imagePath = `${process.env.PUBLIC_URL}/assets/${item.image}`;
      return (
          <div key={item.id} style={{padding: '1rem'}}>
            <Link to={`/item/${item.id}`}>
              <img src={imagePath} alt={`${item.name}`}/>
            </Link>
            <div>id: {item.id}</div>
            <div>name: {item.name}</div>
            <div>price: {item.price}</div>
            <div>score: {item.score}</div>
          </div>
      )
    })
  )
};

export default GamesList;
