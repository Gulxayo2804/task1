const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db')
const PORT = 4000;
connectDB();

app.use(bodyParser.json());

app.use('/card', require('./routes/cardRouter'));
app.use('/columns', require('./routes/columnRouter'));
app.use('/user', require('./routes/userRouter'));


app.listen(PORT, ()=>{
    console.log(`Server on ${PORT} running`)
})
