const express = require("express");
reuier("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

server;
