const db = require("./config/database");
const { nanoid } = require("nanoid");
const idLenght = 5;

class URLDatabaseManager {
  constructor() {}
  /**
   * Insert a shortened URL into the database.
   *
   * @param {string} originalUrl - The original URL to be shortened.
   * @return {object} - An object containing the error, status and message of the operation.
   */
  async shortenURL(originalUrl) {
    const query =
      "INSERT INTO urls (original_url, decoded_url_id) VALUES (?, ?)";
    try {
      const id = nanoid(idLenght);
      await db.query(query, [originalUrl, id]);
      return {
        error: false,
        status: 200,
        message: "URL shortened successfully",
        data: {
          id,
          originalUrl,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
        status: 500,
        message: "Internal Server Error",
      };
    }
  }

  /**
   * Retrieves the original URL associated with the given shortened URL.
   *
   * @param {string} shortenedURL - The shortened URL to expand.
   * @return {Object} The expanded URL object.
   */
  async expandURL(shortenedURL) {
    const query = "SELECT * FROM urls WHERE decoded_url_id=?";
    try {
      const result = await db.query(query, shortenedURL);
      if (result && result[0].length > 0) {
        return {
          status: 200,
          error: false,
          data: { ...result[0][0] },
          message: "URL unshortened successfully",
        };
      } else {
        return {
          status: 404,
          error: true,
          data: {},
          message: "URL not found",
        };
      }
    } catch (error) {
      console.log(error);
      return {
        status: 500,
        error: true,
        data: {},
        message: "Internal Server Error",
      };
    }
  }

  /**
   * Retrieves all URLs from the database.
   *
   * @return {Object} An object containing the retrieved URLs.
   *         - status: The status code of the response (200).
   *         - error: Whether an error occurred (false).
   *         - data: The retrieved URLs.
   *         - message: A message indicating the success of the retrieval.
   */
  async getAllURLs() {
    const query = "SELECT * FROM urls";
    const result = await db.query(query);
    if (result && result[0].length > 0) {
      return {
        status: 200,
        error: false,
        data: result[0],
        message: "URLs retrieved successfully",
      };
    } else {
      return {
        status: 500,
        error: true,
        data: {},
        message: "Internal Server Error: No URLs found",
      };
    }
  }
}

module.exports = new URLDatabaseManager();
