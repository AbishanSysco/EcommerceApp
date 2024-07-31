const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProductById);
router.delete("/:productId", productController.deleteProductById);
router.post("/",productController.createProduct);
router.put("/:productId",productController.updateProduct);

module.exports = router;
