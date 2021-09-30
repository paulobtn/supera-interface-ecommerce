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

module.exports = router;
