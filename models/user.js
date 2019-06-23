var mongoose = require('mongoose');
var conn=require('./db')

var userSchema=new mongoose.Schema({
  firstname:{
    type:String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  created_at:{
    type:Date,
    default:Date.now
  }
});


userSchema.pre('save',function (next) {
  next();
});

var user=conn.model('User',userSchema);
module.exports=user;
