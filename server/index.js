const express = require("express");
require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.PORT || 3333;
const app = express();
const cors = require("cors");

const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");

// Connect to database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

server;
