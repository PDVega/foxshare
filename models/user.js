var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username : String,
  fullname : String,
  password : String,
})

const user = mongoose.model('user',userSchema)

module.exports = user;
