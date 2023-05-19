import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [playerData, setPlayerData] = useState({ nome: '', idade: '', time: '' });

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/');
      console.log(response)
      setPlayers(response.data);
    } catch (error) {
      console.error('Erro ao buscar os jogadores:', error);
    }
  };
  

  const addPlayer = async () => {
    try {
      const response = await axios.post('http://localhost:4000/players', playerData);
      if (response.status === 201) {
        console.log('Jogador adicionado com sucesso!');
        fetchPlayers();
      } else {
        console.error('Erro ao adicionar jogador:', response.status);
      }
    } catch (error) {
      console.error('Erro ao adicionar jogador:', error);
    }
  };
  
  const updatePlayer = async (playerId) => {
    try {
      if(playerData.nome || playerData.idade || playerData.time !== '') {
        const response = await axios.put(`http://localhost:4000/players/${playerId}`, playerData);
        if (response.status === 200) {
          console.log('Jogador atualizado com sucesso!');
          fetchPlayers();
        } else {
          console.error('Erro ao atualizar jogador:', response.status);
        }
      } else {
        console.error('Preencha todos os campos');
      }
    } catch (error) {
      console.error('Erro ao atualizar jogador:', error);
    }
  };
  
  const deletePlayer = async (playerId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/players/${playerId}`);
      if (response.status === 200) {
        console.log('Jogador excluído com sucesso!');
        fetchPlayers();
      } else {
        console.error('Erro ao excluir jogador:', response.status);
      }
    } catch (error) {
      console.error('Erro ao excluir jogador:', error);
    }
  };
  

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className='container'>
      <h1>Jogadores</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        addPlayer();
      }}>
        <input
          type="text"
          placeholder="Nome"
          value={playerData.nome}
          onChange={(e) => setPlayerData({ ...playerData, nome: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Idade"
          value={playerData.idade}
          onChange={(e) => setPlayerData({ ...playerData, idade: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Time"
          value={playerData.time}
          onChange={(e) => setPlayerData({ ...playerData, time: e.target.value })}
          required
        />
        <button className='register' type="submit">Adicionar</button>
      </form>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <span>{player.nome}</span>
            <span>{player.idade}</span>
            <span>{player.time}</span>
            <button className='update' onClick={() => updatePlayer(player.id)}>Atualizar</button>
            <button className='delete' onClick={() => deletePlayer(player.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
