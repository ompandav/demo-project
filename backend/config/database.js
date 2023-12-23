const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DATABASE_URL;

const dbConnect = () =>{
    mongoose.connect(DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("DB connection is successful"))
    .catch((error)=> {
        console.log("DB connection failed");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;