

mkdir server
cd server

yarn init -y

yarn add typescript -D
yarn tsc --init

yarn add ts-node-dev -D

yarn add express
yarn add @types/express -D

yarn add knex sqlite3

yarn knex //para ver as funçoes do knex

yarn knex:migrate
