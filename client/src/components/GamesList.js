import React from 'react';

const GamesList = ({games}) => {

  if(!games) return <div></div>

  return (
    games.map( (item) => {
      let imagePath = `${process.env.PUBLIC_URL}/assets/${item.image}`;
      return <div key={item.id} style={{padding: '1rem'}}>
        <img src={imagePath} alt={`${item.name}`}/>
        <div>id: {item.id}</div>
        <div>name: {item.name}</div>
        <div>price: {item.price}</div>
        <div>score: {item.score}</div>
      </div>
    })
  )
};

export default GamesList;
