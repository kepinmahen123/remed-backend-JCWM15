const mysql = require("mysql");
const util = require("util");

const db = mysql.createConnection({
  host: "localhost",
  user: "kevin",
  password: "asd123",
  database: "db-kevinjcwm15",
  port: 3306,
});

const query = util.promisify(db.query).bind(db);

module.exports = {db, query};