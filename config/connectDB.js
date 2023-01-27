const mongoose = require("mongoose");
require("dotenv").config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connection successfull")
    } catch (error) {
      console.log("Database connect Failed");   
    }
}


module.exports = connectDB;

 