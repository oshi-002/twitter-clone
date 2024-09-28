import User from "../models/userSchema.js";
import bcryptjs from 'bcryptjs'

export const register =async (req,res)=>{
try {
    const {name , username, email , password}= req.body;
    // validations 
if(!name ||  !username || email || !password){
return res.status(400).json({msg:"All fields are required"})
    
}
const user =  await User.findOne(email)
if(user){
    return res.status(400).json({msg:"User already registered"})
}
 const hashedpassword = await bcryptjs.hash(password , 8)
 // 16 is a salt number upto which the passowrd has to be hashed
//if user doesn't exists , creating an account
await User.create({
    name , 
    username , 
    email , 
    password:hashedpassword,
})
return res.status(200).json({msg:" Account created successfully"})
} catch (error) {
    console.log("User not found");
    
}
}