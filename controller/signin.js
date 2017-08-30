const model = require('../models/user')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

var signIn = (req,res) => {
  model.find({username:req.body.username})
  .then(dataUser=>{
    console.log('hasil:', dataUser);
      if (bcrypt.compareSync(req.body.password, dataUser[0].password)) {
        var makeToken = {
          name:req.body.name,
          fullname:req.body.fullname
        }
        var token = jwt.sign(makeToken, 'uhuy')
        res.send({pesan:"anda berhasil masuk", Auth:token})
      } else {
        res.send("username dan password tidak sesuai")
      }

  }).catch(err=>{
    res.send(err)
  })
}

module.exports = {
  signIn
}
