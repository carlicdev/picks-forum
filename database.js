const mongoose = require('mongoose');

const URI =  `mongodb+srv://CarliC:${process.env.MONGO_ATLAS_PW}@forum-f4b5e.mongodb.net/test?retryWrites=true`;

mongoose.connect(URI,{useNewUrlParser: true})
        .then(db => console.log('connected to DB'))
        .catch(err => console.error(err));

module.exports = mongoose;