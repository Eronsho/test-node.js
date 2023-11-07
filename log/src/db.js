const { Client } = require("pg");

const client = new Client({
  database: "test_log",
  user: "postgres",
  password: "Porshnev98",
  host: "localhost",
  port: 7000,
});
async function connect() {
  await client.connect();
}

async function initTables() {
  await client.query(
    "CREATE TABLE IF NOT EXISTS logs (logId SERIAL PRIMARY KEY, userId INT references users (userId), operation TEXT NOT NULL)"
  );
}
module.exports = { connect, initTables, client };
