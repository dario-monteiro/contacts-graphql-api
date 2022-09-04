# contacts-graphql-api
Node Contacts GraphQL API

## Used stacks
 - Node.js (dev with ver 16)
 - NestJs
 - TypeScript
 - Prisma (ORM)
 - GraphQL
 - JWT


## Pre-requisites
 - Node
 - MySql connection (for create and use database)  


## Create a .env file

```bash
DATABASE_URL="mysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:3306/{DATABASE}"  

JWT_SECRET=tokenSecret  
#JWT_EXPIRATION_TIME: s-seconds / m-minutes / h-hours / d-days  
JWT_EXP_TIME='1d'
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

## Execute Graphql Playground (in browser)

```bash
http://localhost:3000/graphql
```

## Graphql queries and mutations samples

    # Create a new user
    mutation {
        signup(loginUserInput: {username: "user@gmail.com", password: "dgh4fdshfg"}) {
            id
            email
        }
    }

    # Login
    mutation {
        login(loginUserInput: {username: "user@gmail.com", password: "dgh4fdshfg"}) {
            user{
                email
            }
            accessToken
        }
    }

    # List all users
    query {
        usuarios {
            id
            email
        }
    }

    # Get a user
    query {
        usuario(id: 5) {
            id
            email
        }
    }
    