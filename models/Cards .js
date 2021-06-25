const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    columnsID:{
        type:mongoose.ObjectId,
        ref:'Columns',
        required:true
    },
    userID:{
        type:mongoose.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Card', cardSchema);
