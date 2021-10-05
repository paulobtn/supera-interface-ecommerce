import "./styles/GameCard.css";

import { Link } from 'react-router-dom';
import { toBRL } from './helpers';

const GameCard = ({item}) => {

  let imagePath = require(`../assets/${item.image}`).default;

  return (
    <div className="catalogue__card" >
      <Link 
        to={`/item/${item.id}`}
        className="catalogue__link"
      >
        <img 
          src={imagePath} alt={`${item.name}`}
          className="catalogue__image"
        />
      </Link>
      <div className="catalogue__name">{item.name}</div>
      <div className="catalogue__price">{toBRL(item.price)}</div>
    </div>
  )
}

export default GameCard;
