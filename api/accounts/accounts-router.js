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

module.exports = router;
