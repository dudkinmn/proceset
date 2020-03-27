import { gql } from "apollo-boost";

export default gql`
  query getCurrentUserQuery {
    currentUser {
      id
      firstName
      secondName
      email
    }
  }
`;
