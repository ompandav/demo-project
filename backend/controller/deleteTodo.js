const todoSchema = require("../models/Todo");

exports.deletetodo = async (req,res) => {
    try {
        const {title} = req.body;
        const value = todoSchema.findOne({title});

        if(value){
            await todoSchema.deleteOne({title});
            res.status(200).json({
                success:true,
                message:"Deleted Successfuly by adhesh of Sagar Jadhav"
            })
        }
        else{
            res.status(500).json({
                success:false,
                message:"Aai ghalya value ny backend la"
            })
        }
    } 
    
    catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"sever error"
        })
    }
}