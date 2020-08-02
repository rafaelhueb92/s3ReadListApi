const express = require("express");
const path = require("path");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(require("helmet")());
    this.app.use(express.json());
  }

  routes() {
    this.app.post(
      "/",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    this.app.use(require("./routes/files.routes"));
  }
}

module.exports = new App();
