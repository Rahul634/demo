const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username : {
        type : String
    },
    email : {
        type : String
    },
    feedback : {
        type : String
    }
});

module.exports = User = mongoose.model('user',user);