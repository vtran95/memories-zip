var express = require('express');
var router = express.Router();
var usersCtrl = require('../../controllers/users-controller');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);



/*---------- Protected Routes ----------*/





module.exports = router;