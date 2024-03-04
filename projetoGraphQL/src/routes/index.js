const graphql = require("./graphql");
const express = require("express");

const cors = require("cors");

module.exports = class Routes {
  //Aplica as rotas ao caminho específico.
  constructor(app) {
    //Se nenhuma instância do express foi passada
    if (app == null) throw new Error("You must provide an instance of express");

    // Registra o GraphQLi base endpoint.
    
    app.use(cors());
    app.use("/graphql", graphql);
  }
};
