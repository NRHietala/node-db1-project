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
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", validateBody, async (req, res, next) => {
  try {
    const data = await Account.insert(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validateId, validateBody, async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const data = await Account.update(id, changes);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Account.remove(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(500).json({
    info: "Error occurred inside accountsRouter",
    message: error.message,
    stack: error.stack,
  });
});

module.exports = router;
