const mongoose = require("mongoose")

const userSchema   = new mongoose.Schema({
    name:{
        type: String,
        trim: true, 
        require:true,
    },
    username:{
        type: String,
        trim: true, 
        require:true,
        unique:true,
    },
    email:{
        type: String,
        trim: true, 
        require:true,
        unique: true,
    },
    password:{
        type: String,
        trim: true, 
        require:true,
    },
    profile: {
        type:String,
        default:"avater.png"
    }
})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;