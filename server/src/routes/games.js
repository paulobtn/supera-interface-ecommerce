/* games.js é onde estão as rotas de api para buscar
 * os jogos */

const express = require('express');
const GamesRepo = require('../repos/games-repo');

const router = express.Router();

router.get('/api/games', async (req, res) => {
  // recupera todos os jogos

  const games = await GamesRepo.find();
  
  if(games){
    res.send(games);
  } else{
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
