const express = require('express');
const Link = require('../models/Link');
const controller = require('../controllers/linkController');
// require('dotenv').config()


var aws = require('aws-sdk');
const router = express.Router();
var multerS3 = require('multer-s3');
var multer = require('multer');


// aws.config.loadFromPath(process.env.CONFIG_JSON_FILE);
// console.log("ini apaan sih", process.env.CONFIG_JSON_FILE);
// aws.config.loadFromPath({
  // "accessKeyId": process.env.ACCESS_KEY_ID,
//   "secretAccessKey": process.env.SECRET_ACCESS_KEY
// });
aws.config.loadFromPath('./config.json');
aws.config.update({
    signatureVersion: 'v4'
})

var s0 = new aws.S3({});

var upload = multer({
    storage: multerS3({
        s3: s0,
        bucket: 'foxshare', //your bucket name here 
        acl: 'public-read',

        //name of file
        metadata: function(req, file, cb) {
            cb(null, {
                fieldname: file.fieldname
            });
        },
        //unique description/date for the file
        key: function(req, file, cb) {
            cb(null, Date.now() + file.originalname)
        }
    })
})

router.get('/profile/upload', function(req, res, next) {
    res.send(req.files);
})

router.get('/public/images', function(req, res, next) {
    res.send('File image');
})

router.post('/profile/upload', upload.single('files'), function(req, res, next) {
  res.send(req.file);
  console.log(req.file)
    Link.create({
      filename: req.file.originalname,
      filetype: req.file.mimetype,
      size: req.file.size,
      location: req.file.location
    }), (err, link) => {
      if(err) throw err
      res.send(link)
    }
})

router.get('/', controller.getAll)

module.exports = router;
