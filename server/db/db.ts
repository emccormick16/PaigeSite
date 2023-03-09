import { Sequelize } from "sequelize";

const config = {
  logging: false,
};
const DB_NAME = "paigedb";
const DB_URL = `postgres://localhost/${DB_NAME}`;

const database = new Sequelize(process.env.DATABASE_URL || DB_URL, config);

export default database;
