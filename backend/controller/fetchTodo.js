const todoSchema = require("../models/Todo");


exports.fetch = async(req,res) => {
    try {
        const data = await todoSchema.find();
        if(data){
            res.status(200).json({
                success:true,
                data:data,
                message:"Data recived successfuly"
            })
        }
        else{
            res.status(500).json({
                success:false,
                message:"Data not recived"
            })
        }
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