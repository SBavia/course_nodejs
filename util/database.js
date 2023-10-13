const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "course-nodejs",
  password: "admin",
});

module.exports = pool.promise();
