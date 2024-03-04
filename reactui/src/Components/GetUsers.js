import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

export function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);
  return (
    <div>
      <h1>Todos Alunos</h1>{" "}
      {users.map((val) => {
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
  );
}
