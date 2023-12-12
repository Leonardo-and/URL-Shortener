const {
  getAllURLs,
  shortenURL,
  expandURL,
} = require("../database/URLDatabaseManager");
class ShortenerController {
  constructor() {}

  async getAllURL(_, res) {
    const response = await getAllURLs();
    return res.status(response.status).json(response);
  }

  async shortenURL(req, res) {
    const originalURL = req.body.url;
    if (!originalURL) {
      return res.status(400).json("Please enter a valid URL");
    }
    const response = await shortenURL(originalURL);
    const { status, error } = response;
    if (error) {
      return res.status(status).json(response);
    }
    return res.status(status).json(response);
  }

  async getOriginalURL(req, res) {
    const shortURL = req.params.id;
    if (!shortURL) return res.status(400).json("Please enter a valid URL");

    const response = await expandURL(shortURL);
    const { status, error } = response;

    if (error) {
      return res.status(status).json(response);
    }

    return res.status(status).json(response);
  }
}

module.exports = new ShortenerController();
