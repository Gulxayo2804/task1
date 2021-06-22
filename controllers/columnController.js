const Columns = require('../models/Columns ');
exports.createColumns = async(req,res,next)=>{
    const columns = new Columns({
        title:req.body.title
    })
    await columns.save()
    .then(()=>{
        res.status(201).json({
            success:true,
            data:columns
        })
    })
    .catch((error)=>{
        res.status(500).json({
            success:false,
            data:error
        })
    })
}


exports.updateColumns = async(req,res,next)=>{
    const columns = await Columns.findByIdAndUpdate({_id:req.params.id})
    columns.title=req.body.title
    await columns.save()
    res.status(200).json({
        success:true,
        data:columns
    })
}
exports.deleteColumns = async(req,res,next)=>{
    await Columns.findByIdAndDelete({_id:req.params.id},(err,data)=>{
        if(err) throw err
        res.send("Successful delete ");
    })
}


