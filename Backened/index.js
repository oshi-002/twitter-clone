
import dotenv from 'dotenv';
import express from 'express'
import connectToMongodb from './connectToMongodb.js';
import cookieParser from 'cookie-parser';
import userRoute from './routers/userRoute.js'

dotenv.config({
    path: ".env"
});
// const app = express();
const app = express();
connectToMongodb();

//middleware
app.use(express.urlencoded)({extended:false});

app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/user" , userRoute);
app.get('/home', (req,res)=>{
    res.status(200).json({msg:"coming from backened..."})
});

app.listen(process.env.PORT , ()=>console.log("Server started")
);