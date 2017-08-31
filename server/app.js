const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors');

require('dotenv').config()
const index = require('./routes/index');
const signup  = require('./routes/signup');
const signin = require('./routes/signin');


mongoose.connect('mongodb://msrabbani:lT4melzO8DbkotsO@foxshare-shard-00-00-9yq1c.mongodb.net:27017,foxshare-shard-00-01-9yq1c.mongodb.net:27017,foxshare-shard-00-02-9yq1c.mongodb.net:27017/foxshare?ssl=true&replicaSet=foxshare-shard-0&authSource=admin');


// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use('/', index);
app.use('/signup', signup);
app.use('/signin', signin);

app.listen(process.env.PORT || 3000);
