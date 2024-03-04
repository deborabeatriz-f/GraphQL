const { GraphQLList, GraphQLID, GraphQLString } = require("graphql");
const type = require("./type");
const User = require("./user");

//Define as consultas (queries).
module.exports = {
  users: {
    type: new GraphQLList(type),
    args: {
      nome: {
        type: GraphQLString,
      },
      sobrenome: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      cpf: {
        type: GraphQLString,
      },
    },
    resolve: User.findMatching.bind(User),
  },
  user: {
    type,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: User.getByID.bind(User),
  },
};
