const User = require("../../models/userModel")
// const bcrypt =  require("bcrypt")

exports.signup = async (req, res, next) => {
    
    
    console.log(req.body.username)
    try {
        
        req.body.password = new bcrypt.hash(req.body.password, 11)
        
        const {name, username, email, password, profile} = req.body;
        const user = await User.create({
            name,
            username,
            email,
            password,
            profile,
        })    
        res.status(201).json({
            message: `Dear Mr. ${name} user is created`, user, 
        })
    } catch (error) {
        res.status(401).json("Something wents wrong !!")
    }

}