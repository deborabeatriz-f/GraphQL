import React from "react";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS_BY_FIELDS } from "../GraphQL/Queries";

export function Form() {
  const [searched, setSearched] = useState(false);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  //   const [getUserByFields, { error, data }] = useQuery(LOAD_USERS_BY_FIELDS);

  const [users, setUsers] = useState([]);
  const [usersByField, setUsersByField] = useState([]);

  const { loading, error, data } = useQuery(LOAD_USERS_BY_FIELDS, {
    variables: { nome, sobrenome },
  });

  useEffect(() => {
    if (data) {
      setUsers([]);
      setUsersByField(data.users);
    }
  }, [data]);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Pesquisar informações sobre alunos(as):</h1>
      <form action="">
        <div>
          <label>Nome</label>
          <input
            type="text"
            onBlur={(e) => {
              setNome(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Sobrenome</label>
          <input
            type="text"
            onBlur={(e) => {
              setSobrenome(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label>CPF</label>
          <input
            type="text"
            onBlur={(e) => {
              setCpf(e.target.value);
            }}
          />
        </div>

        <button onClick={(e) => handleClick(e)}>Procurar Aluno(a)</button>
      </form>

      <div>
        <h1>Aluno(a) Pesquisado(a)</h1>{" "}
        {usersByField?.map((val) => {
          return (
            <div>
              <h3> {val.nome}</h3>
              <h3> {val.sobrenome}</h3>
              <h4> {val.email}</h4>
              <h4> {val.cpf}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
