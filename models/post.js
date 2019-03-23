const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;

const PostSchema = new Schema({
    _id: { type: ObjectId },
    author: { type: String, required: true },
    category: { type: String, required: true },
    subject: { type: String, required: true },
    title: { type: String, required: true },
    comment: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
    
});

module.exports = model('Post', PostSchema);