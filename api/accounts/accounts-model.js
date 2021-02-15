const db = require("../../data/dbConfig.js");

const getAll = () => {
  return db("accounts");
};

const getById = id => {};

const insert = data => {};

const update = () => {};

const remove = () => {};

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove,
};
