import "./styles/GameCard.css";

import { Link } from 'react-router-dom';
import { toBRL } from './helpers';

const GameCard = ({item}) => {

  let imagePath = require(`../assets/${item.image}`).default;

  return (
      <Link 
        to={`/item/${item.id}`}
        className="catalogue__card"
      >
        <img 
          src={imagePath} alt={`${item.name}`}
          className="catalogue__image"
        />
        <div className="catalogue__name">{item.name}</div>
        <div className="catalogue__price">{toBRL(item.price)}</div>
      </Link>
  )
}

export default GameCard;
