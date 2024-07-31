const express = require("express");
const app = express();
require('dotenv').config()
const {connectDB} = require('./db/index.js')
const authRouter = require('./routers/authRtrs.js')

 const requreUser = require('./middlewares/requireUser.js')
const morgon = require('morgan');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const origin = process.env.CORS_ORIGIN

cloudinaryConnect(); 



connectDB();

//middleware


app.use(morgon('common'));
app.use(cookieParser());


app.use(cors({
    credentials:true,
    origin
}))



app.use('/auth',authRouter);


app.get('/',requreUser,(req,res)=>{
    res.status(200).send("yes user is authenticate");
})
 

app.listen(process.env.PORT || 4001,()=>{
    console.log("Server is Lestening on PORT" ,process.env.PORT);
})