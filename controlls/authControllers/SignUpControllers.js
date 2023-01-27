const User = require("../../models/userModel")

exports.signup = async (req, res, next) => {
    const {name, userName, email, password, profile} = req.body;
    
    try {
        const user = await User.create({
            name,
            userName,
            email,
            password,
            profile
        })    
        res.status(201).json({
            message: `Dear Mr. ${name} user is created`, user
        })
        
        console.log(name);
 
    } catch (error) {
        res.status(401).json("Something wents wrong !!")
    }

}