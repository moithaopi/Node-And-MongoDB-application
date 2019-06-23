
var index=function(req,res){
    res.render('index',{
        title:'Express & MongoDB',
        message:'Welcome To Express & MongoDB CRUD application'
      });
};


module.exports=index;
