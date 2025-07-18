const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mohammad@952",
  database: "airbnb",
});

module.exports = pool.promise();
