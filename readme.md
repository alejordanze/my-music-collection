## ⚙️ Project Technologies

This project was developed with NodeJs, Express, Sequelize and Postgres as DB.

## 🔌 Configurations

It is needed to create the database **music** in your postgres server.

## 💿 Install Dependencies

From your CLI inside the folder music-collection run the following command:

npm install

**Make sure you have modified the database configurations inside config/config.json**

To run migrations use the following command inside the folder music-collection **only use this command once when the schema is not set**:

npx sequelize db:migrate

To run the seeds use the following command **it is only needed in a local/development environment, avoid to use it in production** :

npx sequelize db:seed:all

## 💻 Run Project

To run project use the following command inside the folder music-collection:

npm run start

To run in a development enviroment use the following command:

npm run dev

To run the tests use the following command:

npm run test

## 💻 API Documentation

To see the API documentation go to:

http://<your_host>/api-docs

Also, there is a Postman Collection with all endpoints, in the root folder
