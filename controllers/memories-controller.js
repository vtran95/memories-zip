const Memory = require('../models/memory');
const User = require('../models/user');

const fakeMemories = [
    {title: 'World Domination', date: 'Sept 12, 2016'},
    {title: 'Fun times!', date: 'Mar 22, 2014'}
]

function index(req, res) {
    User.findById(req.user._id).populate('memories').exec((err, user) => {
        if(user.memories.length) {
            res.status(200).json(user.memories)
        } else {
            res.status(200).json([{title: null,
                                   date: null,
                                   location: null,
                                   description: null,
                                   images: []}])
        }
    })
}

function create(req, res) {
    console.log(req.body);
    var newMemory = new Memory(req.body);
    console.log(req.user._id)
    newMemory.creator = req.user._id;
    newMemory.save((err, memory) => {
        User.findById(req.user._id, (err, user) => {
            console.log(user)
            console.log(memory)
            user.memories.push(memory._id);
            user.save(() => res.status(201).json(memory))
        })
    })
}

function update(req, res) {
    console.log(req.params)
}

function deleteMemory(req, res) {
    User.findById(req.user._id, (err, user) => {
        user.memories.remove(req.params.id);
        user.save(() => {
            Memory.findById(req.params.id, (err, memory) => {
                memory.remove();
                res.status(200);
                res.end();
            })
        })
    })
}


module.exports = {
    index,
    create,
    update,
    delete: deleteMemory
};