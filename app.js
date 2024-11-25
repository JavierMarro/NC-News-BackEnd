const express = require("express");
const app = express();
const { getApi } = require("./controlers/api.controllers");

app.get("/api", getApi);

module.exports = app;