import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
   description: {
        type: String,
        required: true,

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        
    },
    likes: {
        type: Array,
        default:[]
    },
    bookmark: {
        type:Array,
        default: []

    },
    followers:{
        type:Array,
        default: []
    },
    following:{
        type:Array,
        default: []
    }
}, {timestamps:true})

export const tweet = mongoose.model("tweet" , tweetSchema)

