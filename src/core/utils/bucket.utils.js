require("dotenv/config");
const AWS = require("aws-sdk");
const region = process.env.REGION || "sa-east-1";
const Bucket = process.env.BUCKET || "s3tosqshueb";
const file = require("./file.utils");

AWS.config.update({ region });
s3 = new AWS.S3({ apiVersion: "2006-03-01" });

class BucketOperations {
  listBucket() {
    try {
      const bucketParams = {
        Bucket,
      };
      return new Promise((resolve, reject) => {
        s3.listObjects(bucketParams, (err, { Contents }) => {
          if (err) {
            throw reject(err);
          } else {
            resolve(
              Contents.map(({ Key, LastModified }) => ({
                Key,
                LastModified,
                url: `https://${bucketParams.Bucket}.s3-${region}.amazonaws.com/${Key}`,
              }))
            );
          }
        });
      });
    } catch (ex) {
      throw ex;
    }
  }

  async upload(filePath) {
    try {
      const uploadParams = {
        Bucket,
        Body: await file.read(filePath),
        Key: require("path").basename(filePath),
      };
      return new Promise((resolve, reject) => {
        s3.upload(uploadParams, (err, data) => {
          if (err) throw reject(err);
          if (data) return resolve(data);
        });
      });
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new BucketOperations();
