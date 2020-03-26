import ApolloClient, { gql, Operation } from "apollo-boost";


const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  request: (operation: Operation) => {
    const token = localStorage.getItem("token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});

export default client