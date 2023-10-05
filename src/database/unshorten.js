const db = require("./config/database");

function unshorten(shortURL, callback) {
  let status;
  let original_url;
  const query = "SELECT * FROM urls WHERE decoded_url_id=?";
  db.query(query, shortURL, (err, result) => {
    if (err) {
      console.log(err);
      status = 500;
      return;
    }
    if (result && result.length > 0) {
      status = 200;
      original_url = result[0].original_url;
    } else {
      status = 404;
    }

    callback({ status, original_url });
  });
}

module.exports = unshorten;
