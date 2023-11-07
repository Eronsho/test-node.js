const { client } = require("../db");

class LogService {
  async addLogs(userId, operation) {
    await client.query("INSERT INTO logs (userId, operation) values ($1,$2)", [
      userId,
      operation,
    ]);
  }
  async getLogs(userId, pageNum, pageSize) {
    const offset = pageNum * pageSize;
    const result = await client.query(
      "SELECT logId, userId, operation FROM logs WHERE userId = $1 ORDER BY logId OFFSET $2 LIMIT $3",
      [userId, offset, pageSize]
    );
    return result.rows;
  }
}

module.exports = LogService;
