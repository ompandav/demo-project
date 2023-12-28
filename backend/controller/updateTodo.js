const todo = require("../models/Todo");


exports.update = async (req, res) => {
    try {

        const {title} = req.body;
        const present = await todo.findOne({title});
        if(present){
            const updated = await todo.updateOne({title},{title: 'j1'});
            res.status(200).json({
                success:true,
                data:updated,
                message:"Found and updated"
            })
        }
        else{
            res.status(500).json({
                success:false,
                message:"not found"
            })
        }
    } 
    
    catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}