const mySQLConnector = require("./mysqlConnector");

module.exports = class MySQLWrapper {
  //Consulta o banco de dados.
  static createQuery({ query, params }) {
    return new Promise((succeed, fail) => {
      mySQLConnector.pool.getConnection((err, connection) => {
        //Se um erro foi passado ao obter uma conexão.
        if (err) {
          return fail(err);
        }
        //Executa a consulta.
        connection.query(query, params, (err, rows) => {
          //Libera a conexão.
          connection.release();
          //Se um erro foi passado ao executar a consulta.
          if (err) {
            return fail(err);
          }

          //Cumpre execução.
          return succeed(rows);
        });
      });
    });
  }

  //Executa uma consulta transacional.
  static createTransactionalQuery({ query, params, connection }) {
    return new Promise((succeed, fail) => {
      connection.query(query, params, (err, rows) => {
        if (err) {
          return fail(err);
        }

        return succeed(rows);
      });
    });
  }

  //Reverte uma transação.
  static rollback(connection) {
    return new Promise((succeed, fail) => {
      try {
        connection.rollback(() => succeed());
      } catch (e) {
        return fail(e);
      } finally {
        connection.release();
      }
    });
  }

  //Confirma uma transação.
  static commit(connection) {
    return new Promise((succeed, fail) => {
      try {
        connection.commit((err) => {
          if (err) {
            return rollback(connection, err);
          }

          return succeed();
        });
      } catch (e) {
        return fail(e);
      } finally {
        connection.release();
      }
    });
  }

  //Recupera uma conexão do pool para ser usada em transações.
  static getConnectionFromPool() {
    return new Promise((succeed, fail) => {
      mySQLConnector.pool.getConnection((err, connection) => {
        //Falha, se uma conexão não puder ser recuperada.
        if (err) {
          return fail(err);
        }

        //Retorna uma conexão.
        return succeed(connection);
      });
    });
  }

  //Inicia uma nova transação em uma conexão.
  static beginTransaction(connection) {
    return new Promise((succeed, fail) => {
      connection.beginTransaction((err) => {
        if (err) {
          return fail(err);
        }

        return succeed(connection);
      });
    });
  }
};
