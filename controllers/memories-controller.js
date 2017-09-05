const fakeMemories = [
    {title: 'World Domination', date: 'Sept 12, 2016'},
    {title: 'Fun times!', date: 'Mar 22, 2014'}
]

function index(req, res) {
    console.log(req.user);
    res.json(fakeMemories);
}

module.exports = {
    index
};