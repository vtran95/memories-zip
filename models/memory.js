var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memorySchema = new Schema({
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    title: String,
    date: String,
    location: String,
    description: String,
    images: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Memory', memorySchema);