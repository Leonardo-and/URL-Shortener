const express = require("express");
const routes = express.Router();
const ShortenerController = require("../controllers/ShortenerController");

routes.get("/", ShortenerController.getAllURL);
routes.get("/:id", ShortenerController.getOriginalURL);
routes.post("/short", ShortenerController.shortenURL);

module.exports = routes;
