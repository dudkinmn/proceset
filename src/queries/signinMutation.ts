import { gql } from "apollo-boost";

export default gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        firstName
        secondName
        email
      }
    }
  }
`;
