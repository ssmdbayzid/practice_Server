const express = require("express")
const app = express()
const cors = require("cors")
// const { errorHandler } = require("./middleWare/errorMiddleWare")
const connectDB = require("./config/connectDB")
const port = 5000 || process.env.PORT
const dotenv = require("dotenv")
dotenv.config()



//* user = food_Fact

//* passport = TDxh07Q4C6RfuSUN

app.use(cors())
app.use(express.json());
// app.use(errorHandler)



app.use("/cartItem", require("./routes/productRoute"))

app.use("/signUp", require("./routes/auth/signUpRoute"))

app.get("/", (req, res)=>{
    res.send("Server site is running")
})


//* Sign Up Route 


// console.log(process.env.DATABASE_URL)

app.listen(port, ()=>{
    console.log(`server running with ${port}`)
    connectDB();
})