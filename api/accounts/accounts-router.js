const express = require("express");
const Account = require("./accounts-model");

const router = express.Router();

router.get("/", (req, res) => {
  Account.getAll()
    .then(acc => res.status(200).json(acc))
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Account.getById(req.params.id)
    .then(acc => res.status(200).json(acc))
    .catch(err => {
      console.log(err);
    });
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
