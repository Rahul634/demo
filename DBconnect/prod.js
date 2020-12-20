const mongoose = require('mongoose');
const URI = process.env.MONGOURL

const connectDB = async ()=>{
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log("database connected");
}

module.exports = connectDB;