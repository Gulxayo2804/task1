const mongoose = require('mongoose');
const columnsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
module.exports = mongoose.model('Columns', columnsSchema);