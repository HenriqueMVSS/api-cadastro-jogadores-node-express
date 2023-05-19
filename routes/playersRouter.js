const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');

router.get('/', (req, res) => {
  playersController.loadPlayersData()
    .then(players => {
      res.json(players);
    })
    .catch(error => {
      res.status(500).json({ error: 'Erro ao carregar os jogadores.' });
    });
});

router.post('/players', (req, res) => {
  const playerData = req.body;
  playersController.addPlayer(playerData)
    .then(() => {
      res.status(201).json({ message: 'Jogador adicionado com sucesso!' });
    })
    .catch(error => {
      res.status(500).json({ error: 'Erro ao adicionar o jogador.' });
    });
});

router.put('/players/:id', (req, res) => {
  const playerId = req.params.id;
  const playerData = req.body;
  playersController.updatePlayer(playerId, playerData)
    .then(() => {
      res.json({ message: 'Jogador atualizado com sucesso!' });
    })
    .catch(error => {
      res.status(500).json({ error: 'Erro ao atualizar o jogador.' });
    });
});

router.delete('/players/:id', (req, res) => {
  const playerId = req.params.id;
  playersController.deletePlayer(playerId)
    .then(() => {
      res.json({ message: 'Jogador excluído com sucesso!' });
    })
    .catch(error => {
      res.status(500).json({ error: 'Erro ao excluir o jogador.' });
    });
});

module.exports = router;
