const express = require("express");
const LogService = require("../service/log-service");

const router = express.Router();
const logService = new LogService();
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  const page = req.query.page ?? 0;

  const rows = await logService.getLogs(id, page, pageSize);

  if (rows.length !== 0) {
    res.status(200);
    res.json(rows);
    return;
  }

  res.status(404);
  res.end();
});

router.post("/", async function (req, res, next) {
  const { userId, operation } = req.body;
  console.log(logService);
  await logService.addLogs(userId, operation);

  res.status(201);
  res.end();
});

module.exports = router;
