const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors');

require('dotenv').config()
const index = require('./routes/index');
const signup = require('./routes/signup');
const signin = require('./routes/signin');


mongoose.connect('mongodb://localhost/foxshare');

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use('/', index);
app.use('/signup', signup);
app.use('/signin', signin);

app.listen(process.env.PORT || 3000);
