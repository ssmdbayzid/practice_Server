const { signup } = require("../../controlls/authControllers/SignUpControllers")

const signUpRoute = require("express").Router()

signUpRoute.route("/").post(signup)


module.exports = signUpRoute