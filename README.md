# contacts-graphql-api
Node Contacts GraphQL API

## Used stacks
 - Node.js (dev with ver 16)
 - NestJs
 - TypeScript
 - Prisma (ORM)
 - GraphQL


## Pre-requisites
 - Node
 - MySql connection* (for create and use database)  


## Create a .env file

```bash
DATABASE_URL="mysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:3306/{DATABASE}"
```

## Installation

```bash
# install dependencies
$ npm install

# install Prisma cli
$ npm install --location=global prisma

# create database (in MySql) from Prisma schema
$ npx prisma db push

# gererate Prisma db client
$ npx prisma generate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Execute Graphql (Playground)

```bash
http://localhost:3000/graphql
```