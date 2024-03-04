const DAO = require("../../lib/dao");
const mySQLWrapper = require("../../lib/mysqlWrapper");

class User extends DAO {
  static get TABLE_NAME() {
    return "users";
  }

  //Retorna um user pelo seu id.
  static async getByID(_, { id }) {
    return await this.find(id);
  }

  //Retorna uma lista de users que correspondem aos campos passados.
  static async findMatching(_, fields) {
    // Retorna mais cedo com todos os users se nenhum critério foi passado.
    if (Object.keys(fields).length === 0) return this.findAll();

    //Encontra users correspondentes.
    return this.findByFields({
      fields,
    });
  }
}

module.exports = User;
