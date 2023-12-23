const mongoose = require('mongoose');



const Todoschema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:true,
            maxLength:50,
        },
        desciption:{
            type:String,
            require:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            require:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            require:true,
            default:Date.now,
        }
    }
);


module.exports = mongoose.model("Todoschema", Todoschema);