const model = require('../models');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
require('dotenv').config()
var jwt = require('jsonwebtoken');

var signup = (req,res) => {
  model.create({
    var hash =  bcrypt.hashSync(req.body.password,salt);
    username : req.body.username,
    fullname : req.body.fullname,
    password : hash,
  })
}

var deleteuser = (req,res) => {
  model.deleteOne({_id : req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getalluser = (req,res) => {
  model.find({})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {signup,getalluser,deleteuser};
