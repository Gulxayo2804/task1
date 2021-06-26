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

// method -  GET
// cardni search qilish:
exports.getSearch = async(req,res,next)=>{
    await Card.find( { description: { $regex: req.query.description } }, (err,data)=>{
        res.send(data)
    } )
}

// method -  PUT
// cardga  Userlarni biriktirilish:
exports.updateUserByCard = async(req,res,next)=>{
    const card = await Card.findByIdAndUpdate({_id:req.params.id})
    card.userID=req.body.userID
    await card.save({validateBeforeSave:true})
    res.status(200).json({
        success:true,
        data:card
    })
}

// method -  GET
// cardga biriktirilgan Userni find qilish:
exports.getByUserCard = async(req,res,next)=>{
    await Card.find({userID:req.params.userID},(err,data)=>{
        if(err) throw err
        res.send(data);
    })
}

// method -  DELETE
// cardga biriktirilgan Userni o'chirish:
exports.deleteUserByCard = async(req,res,next)=>{
    await Card.findByIdAndDelete({_id:req.params.id},{userID:req.params.userID},(err,data)=>{
        if(err) throw err
        res.send("Successful delete ");
    })
}






