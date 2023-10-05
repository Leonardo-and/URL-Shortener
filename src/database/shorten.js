const db = require("./config/database");

function shorten(id, original_url, callback) {
  let status;
  let msg;
  const query = "INSERT INTO urls (original_url, decoded_url_id) VALUES (?, ?)";
  db.query(query, [original_url, id], (err, _) => {
    if (err) {
      console.log(err);
      status = 500;
      msg = "Ocorreu um erro!";
      return;
    }
    status = 200;
    msg = "URL encurtado!";
    callback({ status, msg });
  });
}
module.exports = shorten;
