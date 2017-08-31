const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    // mongoose = require('mongoose'),
    // cors = require('cors');
// var S3 = require('aws-sdk/clients/s3');
    
// require('dotenv').config()
    
const index = require('./routes/index');

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
// app.use(function(req, res, next){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", 'DELETE, PUT, POST');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


app.use('/', index);


app.listen(process.env.PORT || 3000);
