var express = require('express');
var router = express.Router();

/*---------- Protected Routes ----------*/

router.get('/', checkAuth, function(req, res, next) {
    res.status(200).json({cid: process.env.CID})
});

/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;