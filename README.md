# Apollo server simple starter project using sequelize

## Features

- Babel 7.
- Environment Variables.
- Unit test with mocha and chai.
- Build with babel.
- Apollo server setup.
- Subscriptions setup.
- Root schema and resolvers for files, dates,etc.
- Sequelize setup with mysql as a example.
- User model,schema and resolvers with default values.
- Password encriptyon.
- Authorization and authentication.

## Requirements

- [node & npm](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)
- An SQL database ( for this example is mySql, but you can change it)

## Installation

- clone the project
- run yarn or npm install
- create a _.env_ file in your root directory
- add Enviroment variables
- Start database
- yarn dev or npm dev

##Environment Variables

After you have created a database and a database user, you can fill out the environment variables in the _server/.env_ file.

```
PORT=4000
SERVICEHOST=localhost
SECRET=wr3r23fwfwefwekwselfGGG.2456342.dawqdq

DB_NAME=test
DB_USER=root
DB_PASSWORD=dbpassword
DB_HOSTNAME=localhost

```

The `SECRET` is just a random string for your authentication. Make to sure too keep all this variables hidden from the public by adding your .env file to .gitignore.
If you change your database for something like postrgess for example, change the dialect of config from "mysql" to "postgres"
