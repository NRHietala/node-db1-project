const Account = require("../accounts/accounts-model");

async function validateId(req, res, next) {
  try {
    const user = await Account.get(req.params.id);
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404).json(`Account with id: ${req.params.id} not found`);
    }
  } catch (error) {
    res.status(500).json("Could not validate account id");
  }
}

function validateBody(req, res, next) {
  const { name, budget } = req.body;

  if (!name || !budget) {
    next();
  } else {
    res.status(400).json({ message: "Missing required field" });
  }
}

module.exports = {
  validateId,
  validateBody,
};
