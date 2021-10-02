import { Link } from "react-router-dom";

const GamesList = ({games}) => {

  return (
    games.map( (item) => {
      let imagePath = `${process.env.PUBLIC_URL}/assets/${item.image}`;
      return (
        <Link key={item.id} to={`/product/${item.id}`}>
          <div style={{padding: '1rem'}}>
            <img src={imagePath} alt={`${item.name}`}/>
            <div>id: {item.id}</div>
            <div>name: {item.name}</div>
            <div>price: {item.price}</div>
            <div>score: {item.score}</div>
          </div>
        </Link>
      )
    })
  )
};

export default GamesList;
