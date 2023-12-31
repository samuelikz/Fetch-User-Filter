﻿# Fetch-User-Filter

Este código é um exemplo de uma aplicação web simples que faz requisições assíncronas para uma API (no caso, "https://jsonplaceholder.typicode.com/users"), exibe os dados obtidos em uma tabela HTML e permite a ordenação e filtragem dos usuários.

# Variáveis Globais:

let sortOrder = 1;: Esta variável é usada para controlar a ordem de classificação dos usuários na tabela. O valor 1 significa ordenação ascendente e -1 significa ordenação descendente.
let users = [];: Armazena os dados dos usuários obtidos da API.
const myUrl = "https://jsonplaceholder.typicode.com/users";: A URL da API que fornece dados dos usuários.
Função fetchData(url):

Uma função assíncrona que utiliza a API Fetch para obter dados da URL fornecida.
Retorna os dados obtidos da API.
Função sortUsers(users, order):

Recebe uma matriz de usuários e uma ordem de classificação.
Cria uma cópia da matriz de usuários e a ordena com base no nome (em ordem alfabética).
A multiplicação por order determina se a ordenação é ascendente (1) ou descendente (-1).
Função filterUsersByName(users, name):

Filtra a matriz de usuários com base no nome fornecido.
Função displayData(tbody, users):

Recebe uma referência para o corpo da tabela (tbody) e a matriz de usuários.
Cria uma string HTML que representa as linhas da tabela com os dados dos usuários.
Atualiza o conteúdo do corpo da tabela com a string HTML criada.
Função Assíncrona initializeApp():

Obtém referências para os elementos HTML relevantes (tabela, botão de ordenação, campo de filtro por nome).
Chama a função fetchData para obter os dados iniciais dos usuários.
Exibe os dados na tabela.
Adiciona ouvintes de eventos aos elementos HTML para atualizar a exibição quando ocorrem ações do usuário (clique no botão de ordenação, entrada no campo de filtro).
Verificação de Ambiente:

if (typeof document !== "undefined"): Garante que o código só seja executado em um ambiente em que o objeto document (representando a árvore DOM) esteja disponível, como em um navegador web.
Inicialização da Aplicação:

Se o ambiente for adequado (ou seja, se estiver em um navegador), a função initializeApp é chamada para iniciar a aplicação.
Resumidamente, a aplicação faz uma requisição à API para obter dados de usuários, exibe esses dados em uma tabela HTML e fornece funcionalidades de ordenação e filtragem para o usuário interagir dinamicamente com os dados exibidos.
