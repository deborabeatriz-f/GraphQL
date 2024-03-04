import "./App.css";

import { useEffect, useState } from "react";

import { GetUsers } from "./Components/GetUsers";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Form } from "./Components/Form";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:8080/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const [users, setUsers] = useState([]);

  const [usersByField, setUsersByField] = useState([]);

  useEffect(() => {
    if (usersByField) {
      setUsers([]);
    }
  }, [usersByField]);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Form />
        {users && <GetUsers />}
      </div>
    </ApolloProvider>
  );
}

export default App;
