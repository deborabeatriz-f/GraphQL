let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
} = require("graphql");

//Define o tipo (type).
module.exports = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    nome: {
      type: new GraphQLNonNull(GraphQLString),
    },
    sobrenome: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    cpf: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});
