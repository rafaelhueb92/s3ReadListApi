const routes = require("express").Router();
const multer = require("multer");

const fileController = require("../controllers/files.controller");
const filesController = require("../controllers/files.controller");

const uploadConfigs = require("../../core/utils/multer.utils");
const upload = multer(uploadConfigs);

routes.get("/", fileController.list);
routes.post("/",upload.single("file"), filesController.upload);

module.exports = routes;
