const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const maxSize = 2 * 1024 * 1024;

const local = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathFile = path.join(__dirname, "..", "/tmp");
    cb(null, pathFile);
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, (err, hash) => {
      if (err) cb(err);
      const type = file.mimetype.split("/");
      const fileName = `${hash.toString("hex")}-${Date.now()}.${type[1]}`;
      cb(null, fileName);
    });
  },
});

const upload = multer({
  dest: path.resolve(__dirname, "..", "/tmp"),
  storage: local,
  limits: {
    fileSize: maxSize,
  },
});

module.exports = upload;
