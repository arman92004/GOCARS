var express = require('express');
var router = express.Router();
const {handleImageUpload , handleAdminHome} = require("../src/controllers/adminController");
const {upload} = require("../src/config/multer")

router.get("/",handleAdminHome)
 
router.get("/upload",handleImageUpload)
// , upload.array('images', 15)
module.exports = router;