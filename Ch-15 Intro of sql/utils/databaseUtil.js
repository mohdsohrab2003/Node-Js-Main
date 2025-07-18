const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "airbnb2",
});
module.exports = pool.promise();
