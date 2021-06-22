const Card = require('../models/Cards ')

exports.createCard = async(req,res,next)=>{
    const card = new Card({
    description:req.body.description,
    columnsID:req.body.columnsID
    })
    await card.save()
    .then(()=>{
        res.status(201).json({
            success:true,
            data:card
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success:false,
             data:err
        })
    })
}

exports.updateByColumns = async(req,res,next)=>{
    const card = await Card.findByIdAndUpdate({_id:req.params.id})
    card.columnsID=req.body.columnsID
    await card.save()
    res.status(200).json({
        success:true,
        data: card
    })
}
exports.updateCard = async(req,res,next)=>{
    const card = await Card.findByIdAndUpdate({_id:req.params.id})
    card.description=req.body.description
    await card.save()
    res.status(200).json({
        success:true,
        data:card
    })
}
exports.deleteCard = async(req,res,next)=>{
    await Card.findByIdAndDelete({_id:req.params.id},(err,data)=>{
        if(err) throw err
        res.send("Successful delete ");
    })
}

