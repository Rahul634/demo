const mongoose = require('mongoose');
const URI = 'mongodb+srv://dbUser:dbUser@cluster0.bbupd.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log("database connected");
}

module.exports = connectDB;