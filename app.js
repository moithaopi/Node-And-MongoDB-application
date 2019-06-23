//dependencies or imports
var express = require('express');
var jade=require('jade');
var path = require('path');
var mongoose=require('mongoose');
//routes imports
var index=require('./routes/index');
var users=require('./routes/users');
//initialise express
var app=express();
//express setting
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","jade");
app.use(express.static(path.join(__dirname,'public')));
//routes
app.use('/',index);
app.use('/users',users.index);
app.use('/submit-user',users.add);
//start the server on port 3000
app.listen(3000,function () {
  console.log('Server Started on port 3000');
});
// TODO: implement error404 and layout pages.
// TODO: add css to the views.
// TODO: add angular as front-end framework.
