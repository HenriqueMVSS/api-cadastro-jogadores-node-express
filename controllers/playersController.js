const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

const playersFilePath = './data/players.json';

function loadPlayersData() {
  return new Promise((resolve, reject) => {
    fs.readFile(playersFilePath, 'utf-8')
      .then(data => {
        if (data.length === 0) {
          resolve([]);
        } else {
          resolve(JSON.parse(data));
        }
      })
      .catch(error => {
        console.error('Erro ao carregar os dados dos jogadores:', error);
        reject(error);
      });
  });
}

function savePlayersData(players) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(players, null, 2);
    fs.writeFile(playersFilePath, data, 'utf-8')
      .then(() => {
        resolve();
      })
      .catch(error => {
        console.error('Erro ao salvar os dados dos jogadores:', error);
        reject(error);
      });
  });
}

function addPlayer(playerData) {
  return new Promise((resolve, reject) => {
    const { nome, idade, time } = playerData;

    if (!nome || !idade || !time) {
      reject(new Error('Nome, idade e time são campos obrigatórios.'));
      return;
    }

    loadPlayersData()
      .then(players => {
        const newPlayer = {
          id: uuidv4(),
          nome,
          idade,
          time
        };
        players.push(newPlayer);
        return savePlayersData(players);
      })
      .then(() => {
        console.log('Jogador adicionado com sucesso!');
        resolve();
      })
      .catch(error => {
        console.error('Erro ao adicionar jogador:', error);
        reject(error);
      });
  });
}

function updatePlayer(playerId, playerData) {
  return new Promise((resolve, reject) => {
    const { nome, idade, time } = playerData;

    if (!nome || !idade || !time) {
      reject(new Error('Nome, idade e time são campos obrigatórios.'));
      return;
    }

    loadPlayersData()
      .then(players => {
        const playerIndex = players.findIndex(player => player.id === playerId);

        if (playerIndex === -1) {
          reject(new Error('Jogador não encontrado.'));
          return;
        }

        players[playerIndex].nome = nome;
        players[playerIndex].idade = idade;
        players[playerIndex].time = time;

        return savePlayersData(players);
      })
      .then(() => {
        console.log('Jogador atualizado com sucesso!');
        resolve();
      })
      .catch(error => {
        console.error('Erro ao atualizar jogador:', error);
        reject(error);
      });
  });
}

function deletePlayer(playerId) {
  return new Promise((resolve, reject) => {
    loadPlayersData()
      .then(players => {
        const playerIndex = players.findIndex(player => player.id === playerId);

        if (playerIndex === -1) {
          reject(new Error('Jogador não encontrado.'));
          return;
        }

        players.splice(playerIndex, 1);

        return savePlayersData(players);
      })
      .then(() => {
        console.log('Jogador excluído com sucesso!');
        resolve();
      })
      .catch(error => {
        console.error('Erro ao excluir jogador:', error);
        reject(error);
      });
  });
}

module.exports = {
  loadPlayersData,
  savePlayersData,
  addPlayer,
  updatePlayer,
  deletePlayer
};
