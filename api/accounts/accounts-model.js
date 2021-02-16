const db = require("../../data/dbConfig.js");

const getAll = () => {
  return db("accounts");
};

function getById(id) {
  return db("accounts").where("id", id).first();
}

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
