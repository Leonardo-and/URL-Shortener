const express = require("express");
const db = require("../database/config/database");
const routes = express.Router();
const { nanoid } = require("nanoid");
const shorten = require("../database/shorten");
const unshorten = require("../database/unshorten");

routes.post("/", (req, res) => {
  const originalURL = req.query.url;
  const id = nanoid(5);
  shorten(id, originalURL, ({ status, msg }) => {
    res.status(status).json(msg);
  });
});

routes.get("/:url", (req, res) => {
  const shortURL = req.params.url;
  if (!shortURL) {
    return res.status(404).json("URL not exists!");
  } else {
    unshorten(shortURL, ({ status, original_url }) => {
      res.status(status);
      if (status == 200) {
        return res.redirect(original_url);
      } else {
        res.json("URL not found!");
      }
    });
  }
});

module.exports = routes;
