const express = require("express");
const router = express.Router();

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  res.status(200).json({
    message: `Data of ${id} updated successfully`,
    return_data: { username, password },
  });
});

router.delete("/deactivate/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Profile with id ${id} successfully deleted` });
});

module.exports = router
