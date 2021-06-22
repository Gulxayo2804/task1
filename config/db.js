const mongoose=require('mongoose')
const dbUri='mongodb://localhost:27017/task'
const connectDB=async ()=>{
    const conn=await mongoose.connect(dbUri,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log(`MongoDB Connected:${conn.connection.host}`);
};
module.exports=connectDB;
