import { Sequelize } from "sequelize";
// import * as dotenv from "dotenv";

const sequelize = new Sequelize(`test_bd`, `postgres`, `Porshnev98`, {
  dialect: "postgres",
  host: "localhost",
  port: 7000,
});

export { sequelize };
