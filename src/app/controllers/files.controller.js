const filesServices = require("../../core/services/files.services");

class FilesController {
  async list(_, res) {
    try {
      const files = await filesServices.list();
      return res.send({ files });
    } catch (ex) {
      console.error("Error on list", ex);
      return res.status(501).send("Error on list");
    }
  }

  async upload(req, res) {
    try {
      const { path } = req.file;
      const upload = await filesServices.Upload(path);
      return res.send(upload);
    } catch (ex) {
      console.error("Error on upload file", ex);
      return res.status(501).send("Error on upload file");
    }
  }
}

module.exports = new FilesController();
