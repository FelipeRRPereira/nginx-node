# NGINX + NODE + MySQL

[![Autor](https://img.shields.io/badge/Student-FelipeRRPereira-0077D6?style=flat-square)](https://github.com/FelipeRRPereira)
[![Languages](https://img.shields.io/github/languages/count/FelipeRRPereira/nginx-node?color=0077D6&label=Langueges&style=flat-square)](#)
[![GitHub stars](https://img.shields.io/github/stars/FelipeRRPereira/nginx-node?label=Stars&style=flat-square)](https://github.com/FelipeRRPereira/nginx-node/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/FelipeRRPereira/nginx-node?color=0077D6&label=Issues&style=flat-square)](https://github.com/FelipeRRPereira/nginx-node/issues)
[![GitHub forks](https://img.shields.io/github/forks/FelipeRRPereira/nginx-node?color=0077D6&label=Forks&style=flat-square)](https://github.com/FelipeRRPereira/nginx-node/network)

## Índice

<ul>
  <li><a href="#descrição">Descrição</a></li>
  <li><a href="#estrutura-do-projeto">Estrutura do Projeto</a></li>
  <li><a href="#pré-requisitos">Pré-requisitos</a></li>
  <li><a href="#como-executar">Como Executar</a></li>
  <li><a href="#parando-os-serviços">Parando os Serviços</a></li>
  <li><a href="#desenvolvimento">Desenvolvimento</a></li>
  <li><a href="#logs">Logs</a></li>
  <li><a href="#contribuição">Contribuição</a></li>
  <li><a href="#licença">Licença</a></li>
</ul>


## Descrição

Este projeto é uma aplicação Node.js que utiliza o NGINX como proxy reverso para servir a aplicação e se conecta a um banco de dados MySQL. Todo o ambiente é configurado e orquestrado utilizando Docker Compose.

## Estrutura do Projeto

- **Docker Compose:** Gerencia os serviços da aplicação, incluindo o NGINX, Node.js e MySQL.
- **NGINX:** Atua como proxy reverso, gerenciando as requisições HTTP e redirecionando para a aplicação Node.js.
- **Node.js:** A aplicação principal que contém a lógica de negócios e se comunica com o banco de dados MySQL.
- **MySQL:** Banco de dados relacional utilizado para armazenar os dados da aplicação.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Como Executar

1. Clone o repositório:
    
    ```bash
    git clone <https://github.com/FelipeRRPereira/nginx-node>
    cd seu-projeto
    
    ```
    
2. Execute o Docker Compose:
    
    ```bash
    docker-compose up -d
    
    ```
    
    Isso irá iniciar os contêineres para o NGINX, Node.js e MySQL.
    
3. Acesse a aplicação:
    
    Abra o navegador e vá para `http://localhost:8080`. A aplicação Node.js estará disponível através do proxy reverso do NGINX.
    

## Parando os Serviços

Para parar e remover os contêineres:

```bash
docker-compose down

```

## Desenvolvimento

Para desenvolver ou fazer modificações na aplicação Node.js:

1. Acesse o contêiner da aplicação:
    
    ```bash
    docker-compose exec app bash
    
    ```
    
2. Faça as alterações necessárias e reinicie o serviço se necessário.

## Logs

Para visualizar os logs dos contêineres:

```bash
docker-compose logs -f

```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-nova-funcionalidade`.
3. Faça as suas alterações e comite: `git commit -m 'Adicionar nova funcionalidade'`.
4. Envie para o repositório remoto: `git push origin minha-nova-funcionalidade`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License]().

---