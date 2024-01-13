const express = require("express");
const router = express.Router();
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + ".jpg")
    }
});
   
var upload = multer({ storage: storage })
// const upload = multer({dest: 'uploads/'});

const imagesController = require("../controllers/imagesController");

router.get("/", imagesController.renderUI);
router.post("/upload", upload.single("file"), imagesController.createNewImage);

module.exports = router;