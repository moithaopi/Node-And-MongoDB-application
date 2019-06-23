var user=require('../models/user');

module.exports.index=function(req,res){
    user.find({},function (err,docs) {
        res.render('users',{
          title:'Express & MongoDB',
          users:docs
        });
    });
};

module.exports.add=function(req,res){
  //var usersUrl=
    newUser=new user({
      firstname:req.query.firstname,
      lastname:req.query.lastname,
      email:req.query.username,
      password:req.query.password
    });
    newUser.save(function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log('success');
      }
    });
    //res.end();
    res.redirect('/users');
};

module.exports.edit=function (req,res) {

};

module.exports.delete=function (req,res) {

};
