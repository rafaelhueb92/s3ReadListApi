const bucket = require("../utils/bucket.utils");

class Files {
  async list() {
    try {
        return await bucket.listBucket();
    } catch (ex) {
      console.error("Error on read files on the bucket", ex);
      throw ex;
    }
  }

  async Upload(filePath) {
    try {
        return await bucket.upload(filePath);
    } catch (ex) {
      console.error("Error on upload files on the bucket", ex);
      throw ex;
    }
  }
}

module.exports = new Files();
