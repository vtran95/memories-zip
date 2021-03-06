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

function show(req, res) {
    if(req.params.id === undefined) {
        res.end();
        return;
    }
    Memory.findById(req.params.id, (err, memory) => {
        console.log(memory)
        res.status(200).json(memory);
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
    if(req.params.id === undefined) {
        res.end();
        return;
    }
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

function addImages(req, res) {
    if(req.params.id === undefined) {
        res.end();
        return;
    }
    Memory.findById(req.params.id, (err, memory) => {
        memory.images.push.apply(memory.images, req.body)
        console.log(memory.images)
        memory.save((mem) => {
            console.log(mem)
            res.status(200).json(mem)
        })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteMemory,
    addImages
};