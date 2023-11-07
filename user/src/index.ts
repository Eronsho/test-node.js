import { createServer } from "http";
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sequelize } from "./db";

import { router as userRouter } from "./routes/user";

import path from "path";
config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

const server = createServer(app);
const PORT = 5000;

//start our server
server.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.use(userRouter);
    console.log(process.env.DB_PORT);
    console.log(`Server started on port ${PORT} :)`);
  } catch (error) {
    console.log(error);
  }
});
