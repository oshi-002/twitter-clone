import mongoose from "mongoose"

import dotenv from 'dotenv';

dotenv.config({
    path: ".env"
})


const connectToMongodb =()=>{
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb connected");
    
}).catch((error)=>{
console.log("connection error");

})
}

export default connectToMongodb;