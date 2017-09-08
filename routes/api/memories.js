var express = require('express');
var router = express.Router();
var memoriesCtrl = require('../../controllers/memories-controller');

/*---------- Protected Routes ----------*/

router.get('/', checkAuth, memoriesCtrl.index);
router.get('/:id', checkAuth, memoriesCtrl.show);
router.post('/', checkAuth, memoriesCtrl.create);
router.put('/:id', checkAuth, memoriesCtrl.update);
router.delete('/:id', checkAuth, memoriesCtrl.delete);

/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;