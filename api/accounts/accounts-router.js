const express = require("express");
const Account = require("./accounts-model");

const router = express.Router();

const { validateId, validateBody } = require("../middleware/middleware");

router.get("/", async (req, res, next) => {
  try {
    const data = await Account.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Account.getById(id);
    console.log("working");
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res) => {
  Account.insert(req.body)
    .then(acc => res.status(200).json(acc))
    .catch(error => console.log(error));
});

router.use((error, req, res, next) => {
  res.status(500).json({
    info: "Error occurred inside accountsRouter",
    message: error.message,
    stack: error.stack,
  });
});

module.exports = router;
