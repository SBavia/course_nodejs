const path = require("path");

const express = require("express");
const { body } = require("express-validator");

const adminController = require("../controllers/admin");
const isauth = require("../middleware/is-auth");

const router = express.Router();

router.get("/products", isauth, adminController.getProducts);

router.get("/add-product", isauth, adminController.getAddProduct);

router.post(
  "/add-product",
  isauth,
  [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .trim()
      .withMessage("Wrong title"),
    // body("imageUrl").isURL().withMessage("Wrong url"),
    body("price").isFloat().withMessage("Wrong price"),
    body("description")
      .isLength({ min: 5, max: 400 })
      .trim()
      .withMessage("Wrong desc"),
  ],
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isauth, adminController.getEditProduct);

router.post(
  "/edit-product",
  isauth,
  [
    body("title").isString().isLength({ min: 3 }).trim(),
    body("price").isFloat(),
    body("description").isLength({ min: 5, max: 400 }).trim(),
  ],
  adminController.postEditProduct
);

router.post("/delete-product", isauth, adminController.postDeleteProduct);

module.exports = router;
