const multer = require("multer");
const path = require("path");

const getRoot = () => 
   require("os").platform == "win32" ? process.cwd().split(path.sep)[0] : "/";


module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(`${getRoot()}tmp`),
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
};
