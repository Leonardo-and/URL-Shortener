const mysql = require("mysql2");
require("dotenv").config();
const { USER, PASSWORD, HOST, DATABASE } = process.env;

const db = mysql.createConnection({
  database: DATABASE,
  user: USER,
  host: HOST,
  password: PASSWORD,
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database connected!");
});

module.exports = db;
