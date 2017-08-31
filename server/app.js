const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    cors = require('cors');
    mongoose.connect('mongodb://msrabbani:lT4melzO8DbkotsO@foxshare-shard-00-00-9yq1c.mongodb.net:27017,foxshare-shard-00-01-9yq1c.mongodb.net:27017,foxshare-shard-00-02-9yq1c.mongodb.net:27017/foxshare?ssl=true&replicaSet=foxshare-shard-0&authSource=admin', err => {  
     if (err) throw err
     console.log('Connect to DB foxshare');
   })
    
const index = require('./routes/index');

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.use(function(req, res, next){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", 'DELETE, PUT, POST');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


app.use('/', index);


app.listen(process.env.PORT || 3000);
