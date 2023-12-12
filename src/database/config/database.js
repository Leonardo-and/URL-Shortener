const mysql = require("mysql2");
require("dotenv").config();
const { USER, PASSWORD, HOST, DATABASE } = process.env;

const db = mysql.createConnection({
  database: DATABASE,
  user: USER,
  host: HOST,
  password: PASSWORD,
});

db.connect((error) => {
  error ? console.log(error) : console.log("Database connected!");
});

module.exports = db.promise();
