# Front-end do Sistema de Jogadores

Este é o front-end do sistema de jogadores, desenvolvido em React. Ele se comunica com a API do back-end para gerenciar e exibir jogadores.

## Requisitos

- Node.js (versão 12 ou superior)

## Instalação

1. Faça o clone deste repositório para o seu computador.
2. Navegue até o diretório raiz do projeto:

```
cd frontend/register-players/
```

3. Execute o seguinte comando para instalar as dependências do projeto:

```
npm install
```

## Configuração

1. Abra o arquivo `src/api.js` em um editor de texto.
2. Verifique se a URL da API no arquivo corresponde à URL da sua API do back-end. Se necessário, altere a URL para `http://localhost:4000`:

```javascript
const api = axios.create({
  baseURL: 'http://localhost:4000',
});
```
## Execução
1. Após a conclusão da instalação e configuração, execute o seguinte comando para iniciar o servidor de desenvolvimento:
```
npm start
```
2. O front-end será iniciado e estará acessível em  `http://localhost:3000` no seu navegador.

## Uso
1. No navegador, acesse http://localhost:3000 para abrir o front-end do sistema de jogadores.

2. Você verá uma lista de jogadores (se houver algum cadastrado).

3. Para adicionar um novo jogador, preencha os campos de nome, idade e time no formulário e clique no botão "Adicionar".

4. Os jogadores serão exibidos na lista abaixo do formulário.

5. Para atualizar um jogador, clique no botão "Atualizar" ao lado do jogador desejado e faça as alterações necessárias no formulário. Em seguida, clique no botão "Atualizar" novamente para salvar as alterações.

6. Para excluir um jogador, clique no botão "Excluir" ao lado do jogador desejado.

## Contribuição

Se você encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.