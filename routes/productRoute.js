const express = require("express");
const router = express.Router()
const {getCartItems, addToCart, deleteCartItem, UpdateCartIten} = require("../controlls/cartControlls")


// Get All Cart Item 
router.route("/").get(getCartItems).post(addToCart)

router.route("/:id").put(UpdateCartIten).delete(deleteCartItem)






module.exports = router