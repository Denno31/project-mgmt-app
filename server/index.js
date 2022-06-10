const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();
const connectDB = require("./config/db");
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`server running on port ${port}`));
