import { gql } from "apollo-boost";

export default gql`
  mutation editUserMutation(
      $id: Int!,
      $firstName: String!, 
      $secondName: String!, 
      $email: String!, 
      $password: String!) {
    editUser(
        id: $id,
        firstName: $firstName,
        secondName: $secondName,
        email: $email, 
        password: $password) {
          id,
          email,
          firstName,
          secondName
        }
  }
`;
