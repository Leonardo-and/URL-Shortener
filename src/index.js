const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/routes.js");
require("dotenv").config();

class Application {
  constructor() {
    this.start();
  }
  configExpress() {
    this.app = express();
    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }
  setRoutes() {
    this.app.use(routes);
  }
  start() {
    this.configExpress();
    this.setRoutes();
    this.app.listen(process.env.PORT, () => {
      console.log(`Server Running! 
      http://localhost:${process.env.PORT}`);
    });
  }
}

new Application();
