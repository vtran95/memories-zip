const Memory = require('../models/memory');

const fakeMemories = [
    {title: 'World Domination', date: 'Sept 12, 2016'},
    {title: 'Fun times!', date: 'Mar 22, 2014'}
]

function index(req, res) {
    console.log(req.user);
    Memory.find({}, (err, memories) => {
        if(memories.length) {
            res.status(200).json()
        } else {
            res.json([{title: 'No memories'}])
        }
    })
}

function create(req, res) {
    console.log(req.body);
    // var newMemory = new Memory(req.body);
    // newMemory.creator = req.user.id;
    // User.findOne(req.user.id).exec().then(user => {
    //     if (!user) return res.status(401).json({err: 'Not logged in'});

    // })
}

module.exports = {
    index,
    create
};