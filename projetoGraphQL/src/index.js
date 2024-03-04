const express = require("express");
const bodyParser = require("body-parser");
const Routes = require("./routes");

class App {
  //Define as propriedades a serem usadas por esta classe para criar o servidor.
  constructor() {
    this.expressApp = express();

    //Objeto literal contendo as configurações.
    this.configs = {
      get port() {
        return process.env.PORT || 8080;
      },
    };
  }

  //Aplica qualquer middleware a ser usado por este app.
  applyMiddleware() {
    //Permite que o servidor parse json (analise json).
    this.expressApp.use(bodyParser.json());

    //Registra as rotas utilizadas pelo app.
    new Routes(this.expressApp);
  }

  //Executa o app.
  run() {
    this.expressApp.listen(this.configs.port, () => {
      console.log(
        "Express server running project on port " + this.configs.port + "."
      );
      console.log(`Environment: ${process.env.STAGE || "development"}`);
    });
  }
}

//Executa!
const app = new App();
app.applyMiddleware();
app.run();
