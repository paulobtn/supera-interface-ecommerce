/* games.js é onde estão as rotas de api para buscar
 * os jogos */

const express = require('express');
const GamesRepo = require('../repos/games-repo');

const router = express.Router();

router.get('/api/games', async (req, res) => {
  // recupera todos os jogos

  let games = await GamesRepo.find();
  
  // verifica se há uma query na url
  let query = req.query.q;
  if(query){
    query = query.toLowerCase();
  }

  if(games){
    
    if(query){
      games = games.filter(
        (game) => game.name.toLowerCase().includes(query)
      );
    }

    res.send(games);
  } 
  else{
    res.sendStatus(404);
  }

});

router.get('/api/games/:id', async (req, res) => {
  //recupera um jogo específico
  
  const {id} = req.params
  const game = await GamesRepo.findById(id);

  if(game){
    res.send(game);
  } else{
    res.sendStatus(404);
  }
});

module.exports = router;
