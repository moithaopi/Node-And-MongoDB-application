var mongoose=require('mongoose');


var conn=mongoose.createConnection(
  'mongodb://localhost/my_database',
  {
  useNewUrlParser:true}
);

module.exports=conn;
