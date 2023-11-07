const cors = require("cors");
const express = require("express");

const logsRouter = require("./routes/log");
const { connect, initTables } = require("./db");

const app = express();

app.use(cors());

// Bui
(async function () {
  await connect();
  await initTables();
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * Routes * //

app.use("/logs/api", logsRouter);

// * Start * //

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`));
