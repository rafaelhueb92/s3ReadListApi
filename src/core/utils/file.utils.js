const fs = require("fs");

class File {
  read(filePath) {
    try {
      return new Promise((resolve, reject) => {
        const fileStream = fs.createReadStream(filePath);
        fileStream.on("error", function (err) {
          throw reject(err);
        });
        resolve(fileStream);
      });
    } catch (ex) {
      throw ex;
    }
  }
}
module.exports = new File();