const getCartItems = (req, res)=>{
    res.status(200).json({
        "name" : "Pizza",
        "Price" : 135,
        "orderQty" : 2
})
}

const addToCart = (req, res)=>{
    res.status(200).json({status: `Add item to Cart id ${req.body}`})
    console.log(req.body);
}

const deleteCartItem = (req, res) =>{
    res.status(200).json({status: `Delete a cart Item id ${req.params.id}`})
}


const UpdateCartIten = (req, res)=>{
    res.status(200).json({
        "name" : "Pizza update to Pizzzaa",
        "Price" : 135,
        "orderQty" : 2
})
}

module.exports = {getCartItems, addToCart, UpdateCartIten,  deleteCartItem}