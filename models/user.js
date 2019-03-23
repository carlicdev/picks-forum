const { Schema, model } = require('mongoose'),

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    alias: { type: String, required: true },
    email: {
        type: String, 
        required: true,
        createIndexes: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true }
});

module.exports = model('User', UserSchema);