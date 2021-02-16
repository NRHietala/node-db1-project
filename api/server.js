const express = require("express");
const server = express();
server.use(express.json());

const accountRouter = require("./accounts/accounts-router");

server.use("/api/accounts", accountRouter);

server.get("/", (req, res) => {
  res.status(200).json("We're Live!");
});

module.exports = server;
