# NEXT FULL TEMPLATE
<!-- TOC -->
- [WIKI](./docs/WIKI.md)
- [Code style guidelines](./docs/CODE_STYLE.md)
- [Local setup](#local-setup)
  - [Preparation](#preparation)
  - [Setup](#setup)
  - [Command List](#command-list)


<!-- /TOC -->
---
# Local setup
## Preparation
1. <b>PLEASE REFER TO THE [WIKI markdown](./docs/WIKI.md) TO UNDERSTAND MORE ON HOW AND WITH WHAT TOOLS THE TEMPLATE IS BUILT AND HOW TO RECREATE IT.</b>
2. This template is using Next-boost with Redis for caching and Prisma ORM with Postgres which means you will need to run these services (Redis, Postgres) on your local machine, there are 2 ways to do this:

    2.1 <b>Using docker & docker-compose</b> - this template is already set up to run the services with one command -> `yarn services`. the only thing that is required is having docker installed on your machine. please refer to [Docker website](https://docs.docker.com/get-docker/) for more information on how to install docker.

    2.2 <b>Running the services locally (*not recommended*)</b> - Please refer to [how to setup postgres](https://postgresapp.com/) (or any other prisma supported dbs of your choice), and [how to to setup redis](https://redis.io/docs/getting-started/)

3. <b>NodeJS</b> - This template is using the most recent features of next and some other libraries, so preferably the latest LTS version or any version 14+ please refer to the [WIKI markdown](./docs/WIKI.md) to see ways and tools to install NodeJS

## Setup
1. Please run the following command `yarn setup` to install the required dependencies and initialize an `.env` file.
2. Fill out the missing parts in the newly created `.env` file. the places will be marked with `<please fill in>`
3. You are good to go, please refer to the next section for the full <b>Command list</b>

## Command List
|Command               |Description                                                                                                 |
|----------------------|------------------------------------------------------------------------------------------------------------|
|`yarn dev`            |Starts the server and serving it on [http://localhost:3000](http://localhost:3000) as dev environment       |
|`yarn start`          |Starts the server and serving it on [http://localhost:3000](http://localhost:3000) as production environment|
|`yarn test`           |Runs all the tests, for specific files you can run ex: `yarn t DummyHeader`                                 |
|`yarn build`          |Building the project                                                                                        |
|`yarn lint`           |Runs the es-linter to check and fix linting problems                                                        |
|`yarn lint:style`     |Runs the style-linter to check and fix style linting problems                                               |
|`yarn redis`          |Runs the `Redis` service in a docker container                                                              |
|`yarn db`             |Runs the `db` service in docker containers                                                                  |
|`yarn services`       |Runs both `Redis` and `db` services in docker containers                                                    |
|`yarn prisma:push`    |Migrate and synchronize Prizma's schema with the db                                                         |
|`yarn prisma:generate`|Generates the `prizma client` object for interaction. Important: You need to re-run the prisma generate command after every change that's made to your Prisma schema to update the generated Prisma Client code.                                                |
|`yarn prisma:studio`|Runs a GUI tool to interact with the db on [http://localhost:5555](http://localhost:5555)                     |
---
