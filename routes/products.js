const express = require("express");
const router = express.Router();

const products = require("../products.json");

router.get("/", (req, res) => {
  res.status(200).json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));

  if (!singleProduct) {
    res
      .status(404)
      .json({ status_code: 404, message: `No product found with ID ${id}` });
  }
  res.status(200).json(singleProduct);
});

router.get("/search", (req, res) => {
  const { title } = req.query;
  console.log(req.query);
  const searchProducts = products.find((product) => product.title === title);
  res.json(searchProducts);
});

module.exports = router;
