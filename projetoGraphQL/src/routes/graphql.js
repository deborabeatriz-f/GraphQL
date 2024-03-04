const graphqlHTTP = require("express-graphql");
const router = require("express").Router();
const schema = require("../schema/index");

router.get(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

router.post(
  "/",
  graphqlHTTP({
    schema,
    graphiql: false,
  })
);

module.exports = router;
