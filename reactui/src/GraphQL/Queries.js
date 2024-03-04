import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  {
    users {
      nome
      sobrenome
      email
      cpf
    }
  }
`;

// Se eu adiciono os outros itens (sobrenome, email e cpf) para poderem realizar a query, eles se tornam obrigatórios. :(
export const LOAD_USERS_BY_FIELDS = gql`
  query User($nome: String!) {
    users(nome: $nome) {
      nome
      sobrenome
      email
      cpf
    }
  }
`;
