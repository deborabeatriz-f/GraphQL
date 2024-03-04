const mysql = require("./mysqlWrapper");

class DAO {
  static get PRIMARY_KEY() {
    return "id";
  }

  // Recupera uma única entrada correspondente ao id passado.
  static async find(id) {
    return (
      await mysql.createQuery({
        query: `SELECT * FROM ?? WHERE ?? = ? LIMIT 1;`,
        params: [this.TABLE_NAME, this.PRIMARY_KEY, id],
      })
    ).shift();
  }

  //Recupera todas as entradas na tabela da classe estendida.
  static findAll() {
    return mysql.createQuery({
      query: `SELECT * FROM ??;`,
      params: [this.TABLE_NAME],
    });
  }

  //Encontra entradas por seus fields.
  static findByFields({ fields }) {
    let baseQuery = `SELECT * FROM ?? WHERE `;

    let params = [this.TABLE_NAME];

    Object.keys(fields).forEach((key, index) => {
      baseQuery += `${key} = ?`;
      params.push(fields[key]);
      if (index + 1 !== Object.keys(fields).length) baseQuery += " AND ";
    });

    return mysql.createQuery({
      query: baseQuery,
      params,
    });
  }
}

module.exports = DAO;
