const path = require("path");

const express = require("express");
const { body } = require("express-validator");

const adminController = require("../controllers/admin");

const router = express.Router();

const isAuth = require("../middleware/is-auth");

router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

router.post(
  "/add-product",
  [
    body("title").isString().isLength({ min: 3 }).trim(),
    body("imageUrl").isURL(),
    body("price").isFloat(),
    body("description").isLength({ min: 5, max: 40 }).trim(),
  ],
  adminController.postAddProduct
);

router.get(
  "/edit-product/:productId",
  [
    body("title").isString().isLength({ min: 3 }).trim(),
    body("imageUrl").isURL(),
    body("price").isFloat(),
    body("description").isLength({ min: 5, max: 40 }).trim(),
  ],
  isAuth,
  adminController.getEditProduct
);

router.post("/edit-product", adminController.postEditProduct);

router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
