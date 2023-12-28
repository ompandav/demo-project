
const todoSchema = require('../models/Todo');

exports.create = async (req, res)=>{
    try {
        const {title, description} = req.body;
        const responce = await todoSchema.create({title, description});
        res.status(200).json({
            success:true,
            data:responce,
            message:"Entrey Created Succesfuly",
        })
    } 
    
    catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:"something went wrong"
        })
    }
}