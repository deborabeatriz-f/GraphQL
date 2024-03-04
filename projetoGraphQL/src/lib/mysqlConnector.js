const mysql = require("mysql");

// Estes get semelhantes a const serão usados para conectar ao MySQL.
class MySQLConnector {
  get MYSQL_DB_USER() {
    return process.env.MYSQL_DB_USER || "root";
  }
  get MYSQL_DB_NAME() {
    return process.env.MYSQL_DB_NAME || "exapp";
  }
  get MYSQL_DB_PASSWORD() {
    return process.env.MYSQL_DB_PASSWORD || "senharoot";
  }
  get MYSQL_DB_ADDRESS() {
    return process.env.MYSQL_DB_ADDRESS || "localhost";
  }
  get MYSQL_DB_POOL_SIZE() {
    return process.env.MYSQL_DB_POOL_SIZE || 10;
  }

  // Instancia o pool de conexões.
  constructor() {
    this.internalPool = mysql.createPool({
      host: this.MYSQL_DB_ADDRESS,
      user: this.MYSQL_DB_USER,
      database: this.MYSQL_DB_NAME,
      password: this.MYSQL_DB_PASSWORD,
      connectionLimit: this.MYSQL_DB_POOL_SIZE,
      waitForConnections: true,
    });

    // Permite melhor controle de conexões abertas.
    this.registerThreadCounter();
  }

  // Registra um event lister para capturar quando novas conexões são abertas.
  registerThreadCounter() {
    this.internalPool.on("connection", (connection) =>
      console.log(
        `New connection stablished with server on thread #${connection.threadId}`
      )
    );
  }

  // Recupera o pool de conexões.
  get pool() {
    return this.internalPool;
  }
}

module.exports = new MySQLConnector();
