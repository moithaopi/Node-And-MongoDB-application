var express=require('express');
var router = express.Router();
var users=require('../controllers/users')


module.exports.index=router.get('/',users.index);
module.exports.add=router.get('/submit-user',users.add);
module.exports.edit=router.get('/edit-user',users.add);
module.exports.delete=router.get('/delete-user',users.add);
