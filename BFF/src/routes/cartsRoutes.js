const express = require('express'); 
const router = express.Router();
const cartController = require("../controllers/cartsController");

router.get("/",cartController.getCartItems);
router.delete("/:cartId/items/:productId",cartController.deleteCartItem);
router.post("/",cartController.createCarts);
router.put("/:cartId/items/:productId",cartController.updateCartItem);

module.exports=router;