const model = require('../models/user');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
require('dotenv').config()


var signup = (req,res) => {
  var hash =  bcrypt.hashSync(req.body.password,salt);
  model.create({
    username : req.body.username,
    fullname : req.body.fullname,
    password : hash,
  }).then(dataUser=>{
    res.send(dataUser)
  }).catch(err => {
    res.send(err)
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
