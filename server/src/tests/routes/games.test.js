/* games.test.js é o módulo de teste da api em routes/games.js */

const request = require('supertest');
const app = require('../../app');
const GamesRepo = require('../../repos/games-repo');

it('Carrega todos os jogos', async () => {

  /* carrega todos os jogos, verifica se a requisição foi bem
  sucedida, se o conteúdo é json e se a quantidade de jogos
  está correta */

  await request(app())
    .get('/api/games')
    .expect(200)
    .expect("Content-Type", /json/)
    .expect((res) => {
      res.body.length = 9;
     });
});
