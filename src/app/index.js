const express = require("express");
const path = require("path");
const cors = require("cors");

class App {
  constructor() {
    const http = require("http");
    this.app = express();

    this.server = http.createServer(this.app);
    this.io = require("socket.io")(this.server);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(require("helmet")());
    this.app.use(cors());
    
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      req.io = this.io;
      next();
    });
  }

  routes() {
    this.app.post(
      "/",cors(),
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    this.app.use(require("./routes/files.routes"));
  }
}

module.exports = new App();
