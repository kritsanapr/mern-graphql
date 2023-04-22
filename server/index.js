const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 3333;
const app = express();

const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");

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
