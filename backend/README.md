# API de Registro de Jogadores de Times de Futebol

Esta é uma aplicação de gerenciamento de jogadores, onde você pode adicionar, atualizar e excluir jogadores.

## Requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (versão 12 ou superior)
- NPM (geralmente instalado juntamente com o Node.js)

## Como executar a aplicação

1. Faça o download ou clone este repositório para o seu computador.

2. Abra o terminal e navegue até o diretório raiz da aplicação.

3. Instale as dependências executando o seguinte comando:

   ```shell
   npm install
Após a conclusão da instalação das dependências, inicie o servidor executando o seguinte comando:

  ```shell
   npm start
   ```

O servidor será iniciado e você verá a mensagem "Servidor em execução na porta 4000".

Agora você pode acessar a aplicação em seu navegador usando o seguinte URL: http://localhost:4000

Endpoints da API
A API possui os seguintes endpoints:

GET /players: Retorna todos os jogadores cadastrados.

POST /players: Adiciona um novo jogador.
```shell
  Dados obrigatórios para registar um jogador:
  
   {
    "time": "Nome do time",
    "nome": "Nome do jogador",
    "idade": "idade do jogador"
    }
   ```
PUT /players/:id: Atualiza um jogador existente com o ID fornecido.
```shell
  Dados obrigatórios para editar um jogador:
  
   {
    "time": "Nome do time",
    "nome": "Nome do jogador",
    "idade": "idade do jogador"
    }
   ```

DELETE /players/:id: Exclui um jogador com o ID fornecido.

Certifique-se de utilizar um cliente HTTP (como Postman, cURL ou Insomnia) para fazer as requisições para a API.