# React Challenge

Este é um desafio para testar seus conhecimentos em JavaScript, React e Redux;

Neste teste existem várias respostas corretas, pois o objetivo é avaliar a sua forma de codificação, e suas habilidades usando a tecnologia proposta.

## Obrigatoriedades

O projeto deve utilizar webpack, e deve ser desenvolvido em React, e utilizar Redux para o desenvolvimento.

O Front-End pode utilizar algum framework frontend (exemplos: Material UI https://material-ui.com/pt/)

Os produtos disponíveis devem ser recuperados através de uma API Rest, disponibilizada neste mesmo projeto.

## Cardápio Digital

Seu objetivo é montar um Cardápio Digital simples, conforme o prototipo a seguir:

O layout é livre para ser montado no formato que quiser. 

### Listar itens (com categorias)

- Ao clicar no produto da lista, deve exibir os detalhes de um produto individual;

### Permitir comprar (etapa opcional)

- Ao clicar em comprar, se o produto não estiver na comanda, deve ser adicionado;
- Ao clicar em comprar, se o produto ja existir no comanda, deve ser incrementado em 1;

### Exibir resumo da comanda

- Exibir no icone da comanda uma badge com quantidade de itens;
- Exibir ao lado do icone, o valor total da compra;

### Na comanda é possível

- Permitir remover itens;
- Permitir alterar a quantidade de um item;
- Exibir o somatório total dos itens incluidos;

## Serviço Rest

Criar o backend não é o foco deste teste, portanto está sendo disponibilizado um serviço Rest que deve ser utilizado para recuperar a lista de produtos do projeto.

Para rodar o serviço, é necessário instalar o json-server:

`npm install -g json-server`

Após isso, rodar o comando: `json-server --watch api/menu.json`

Isso irá disponibilizar uma api REST rodando no endereço http://localhost:3333/categories.

Um produto especifico pode ser acessado através da url http://localhost:3333/categories/{id};

> caso ache necessário, pode acrescentar informações no json da api, como por exemplo imagens. Isso seria um plus para a analise do resultado. :)

## Entrega

Criar um repositório na sua conta e enviar o resultado no email artur@liuv.it