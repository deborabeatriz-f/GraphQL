# Projeto GraphQL

## Visão Geral:

Este é um projeto de exemplo que demonstra uma aplicação com API GraphQL com um UI em React.

## Stack:

. React
. Apollo Client
. NodeJS
. GraphQL
. MySQL

## Configuração (Realizar a leitura no README.md Code:

1. Clone este repositório para o seu computador:
	git clone https://github.com/deborabeatriz-f/GraphQL

2. Abra o repositório em sua IDE e abra o terminal do mesmo.

2.1. Entrar na pasta projetoGraphQL e instalar as dependências:
	 cd projetoGraphQL
	 npm i 
	 cd ..

2.2 Entrar na pasta reactui e instalar as dependências:
	 cd reactui
	 npm i
	 cd ..

## Como Executar GraphQL

1. Entre novamente na pasta projetoGraphQL.
2. Após estar dentro da pasta projetoGraphQL execute o seguinte comando no terminal:
	node src/index.js
4. Abra seu navegador no endereço:
	http://localhost:8080/graphql

## Exemplos de operações:

1. Mostrar todos alunos:
{
  users {
  	nome
   	sobrenome
   	email
   	cpf
 	 }
}

2.1. Obter dados pelo nome:
{
  users (nome:"Melissa"){
  	nome
   	sobrenome
   	email
   	cpf
  	}
}

2.2. Obter dados pelo sobrenome:
{
  users (sobrenome:"Carvalho"){
  	nome
   	sobrenome
   	email
   	cpf
  	}
}

2.3. Obter dados pelo email:
{
  users (email:"amanda@dominio.com.br"){
  	nome
   	sobrenome
   	email
   	cpf
  	}
}

2.4. Obter dados pelo cpf:
{
  users (cpf:"56894766843") {
  	nome
   	sobrenome
   	email
   	cpf
  	}
}


## Como Executar React UI

1. Entre novamente na pasta reactui.
2. Após estar dentro da pasta reactui execute o comando:
   	npm start
3. Automaticamente ele deve abrir o navegador:
	http://localhost:3000/

## App:

1. Deve apresentar um formulário com os seguintes inputs: Nome, Sobrenome, Email e CPF.
Um botão de pesquisa: Procurar Aluno(a). 
As seguintes frases uma abaixo da outra: Aluno(a) Pesquisado(a) e Todos Alunos.
E por último a listagem de todos os alunos contento o nome, sobrenome, e-mail e cpf.

Observação I: 
Requisitos:  “A API deve listar os alunos, filtrando por quaisquer dos campos, retornando
todos, caso nenhum seja informado.” 
Não obtive sucesso nas minhas tentativas em retornar toda lista de alunos, caso nenhum fosse informado. Então optei por deixar as informações em exibição já no incio da navegação.

2.1. Digite o nome de um dos alunos existentes na lista no input Nome do formulário e clique no botão Procurar Aluno(a).

2.2. Deve ser exibido na tela o formulário com os filtros já citados e o botão de pesquisa: Procurar Aluno(a). 
Abaixo a frase Aluno(a) Pesquisado(a) e abaixo os dados do aluno pesquisado.
A seguir a frase Todos Alunos e por último a listagem de todos os alunos contento o nome, sobrenome, e-mail e cpf.

Observação II: 
Requisitos: ”A API deve listar os alunos, filtrando por quaisquer dos campos, retornando
todos, caso nenhum seja informado.”
Não obtive sucesso em filtrar os alunos por quaisquer dos campos. Quando colocava qualquer outro campo do formulário para ser preenchido e retornar as informações, seu preenchimento se tornava obrigatório. Optei por deixar somente o preenchimento do Nome como necessário e obrigatório.
