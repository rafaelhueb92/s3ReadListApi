const filesServices = require("../../core/services/files.services");

class FilesController {
  async list(_, res) {
    try {
      const files = await filesServices.list();
      return res.send({ version:"1.1",files });
    } catch (ex) {
      console.error("Error on list", ex);
      return res.status(501).send("Error on list");
    }
  }

  
  async upload(req, res) {
    try {
      const { file, io } = req;
      const { path } = file;
      const upload = await filesServices.Upload(path);
      io.emit("newFile", upload);
      return res.send(upload);
    } catch (ex) {
      console.error("Error on upload file", ex);
      return res.status(501).send("Error on upload file");
    }
  }
}

module.exports = new FilesController();
